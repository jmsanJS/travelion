import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useUser } from "@/context/userContext";
import UserSettingsHeader from "@/components/UserSettingsHeader";
import { auth } from "@/firebaseConfig";
import Loading from "@/components/Loading";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";

export default function UpdateUsername() {
  const router = useRouter();
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!currentPassword || !newPassword) {
      Alert.alert("Please all fields are required.");
      return;
    }
    setLoading(true);

    if (user && auth.currentUser) {
      try {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email!,
          currentPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, newPassword);

        setLoading(false);
        Alert.alert("Your password has been successfully updated.", "", [
          { text: "Back to settings", onPress: () => router.back() },
        ]);
      } catch (error) {
        setLoading(false);
        console.log(error);
        Alert.alert("Oups! Something went wrong. Please try again.");
      }
    } else {
      Alert.alert("User not found");
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <UserSettingsHeader />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Change your password</Text>
        <View>
          <Text style={styles.label}>
            Password must contain at least 8 characters and must contain at
            least 1 capital letter, 1 symbol and 1 number:
          </Text>
          <TextInput
            placeholder="Current password"
            placeholderTextColor="#AAA"
            style={styles.input}
            onChangeText={(value) => setCurrentPassword(value)}
            value={currentPassword}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="New password"
            placeholderTextColor="#AAA"
            style={styles.input}
            onChangeText={(value) => setNewPassword(value)}
            value={newPassword}
            secureTextEntry={true}
          />
        </View>
        {loading ? (
          <View style={styles.loading}>
            <Loading size={100} />
          </View>
        ) : (
          <Pressable onPress={handleUpdate} style={styles.btn}>
            <Text style={styles.btnText}>Update</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  formContainer: {
    position: "absolute",
    top: hp(50),
    left: wp(50),
    width: wp(90),
    height: hp(42),
    transform: [{ translateX: -wp(45) }, { translateY: -hp(21) }],
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp(3.2),
    color: "#222",
    textAlign: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: hp(2),
    color: "#222",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#AAA",
    padding: 15,
    fontSize: hp(2.2),
    borderRadius: 15,
    marginBottom: 20,
  },
  loading: {
    marginVertical: 16,
  },
  btn: {
    borderRadius: 15,
    backgroundColor: "#222",
    padding: 15,
  },
  btnText: {
    textTransform: "uppercase",
    fontSize: hp(2.2),
    fontWeight: "600",
    letterSpacing: 1,
    color: "#FFFF",
    textAlign: "center",
  },
});
