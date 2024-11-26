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
import { auth, db } from "@/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import Loading from "@/components/Loading";
import { EmailAuthProvider, reauthenticateWithCredential, verifyBeforeUpdateEmail } from "firebase/auth";

export default function UpdateEmail() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!currentPassword || !newEmail) {
      Alert.alert("All fields are required.");
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
        await verifyBeforeUpdateEmail(auth.currentUser, newEmail);

        Alert.alert(
          "",
          "Please check your new email inbox to verify this action.",
          [
            {
              text: "OK",
              onPress: () => {
                router.back();
              },
            },
          ]
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
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
        <Text style={styles.title}>New email address?</Text>
        <View>
          <Text style={styles.label}>
            Type your new email address down below and your current password to confirm this action:
          </Text>
          <TextInput
            style={styles.input}
            placeholder="New email address"
            placeholderTextColor={"gray"}
            inputMode="email"
            autoCapitalize="none"
            onChangeText={(value) => setNewEmail(value)}
            value={newEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Current password"
            placeholderTextColor={"gray"}
            secureTextEntry
            enablesReturnKeyAutomatically={true}
            onChangeText={(value) => setCurrentPassword(value)}
            value={currentPassword}
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
    height: hp(38),
    transform: [{ translateX: -wp(45) }, { translateY: -hp(19) }],
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp(3.2),
    color: "#222",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: hp(2),
    color: "#222",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#AAA",
    padding: 15,
    fontSize: hp(2.2),
    borderRadius: 15,
    marginBottom: 20
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
