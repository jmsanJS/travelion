import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useUser } from "@/context/userContext";
import UserSettingsHeader from "@/components/UserSettingsHeader";
import { auth, db } from "@/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import Loading from "@/components/Loading";
import { Image } from "expo-image";
import { blurhash } from "@/constants/constants";

export default function UpdateUsername() {
  const { user, setUser } = useUser();
  const [pictureUrl, setPictureUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!pictureUrl) {
      Alert.alert("Please enter a username.");
      return;
    }
    setLoading(true);

    if (user && auth.currentUser) {
      try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { pictureUrl: pictureUrl });
        setUser({ ...user, pictureUrl: pictureUrl });
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
      <View style={styles.topUsersInfoContainer}>
        <Image
          source={user?.pictureUrl}
          style={styles.profileImg}
          placeholder={{ blurhash }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>New profile picture?</Text>
        <View>
          <Text style={styles.label}>
            You can update your profile picture here:
          </Text>
          <TextInput
            placeholder="Picture Url"
            placeholderTextColor="#AAA"
            style={styles.input}
            onChangeText={(value) => setPictureUrl(value)}
            value={pictureUrl}
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
  topUsersInfoContainer: {
    position: "absolute",
    width: wp(100),
    top: hp(16),
    zIndex: 3,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 75,
    alignSelf: "center",
  },
  formContainer: {
    position: "absolute",
    top: hp(50),
    left: wp(50),
    width: wp(90),
    height: hp(32),
    transform: [{ translateX: -wp(45) }, { translateY: -hp(16) }],
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
    marginBottom: 15,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#AAA",
    padding: 15,
    fontSize: hp(2.2),
    borderRadius: 15,
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
