import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { auth, db } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { useUser } from "@/context/userContext";

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = credential.user.uid;

      const refDoc = doc(db, "users", userId);
      const docSnapshot = await getDoc(refDoc);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setUser({
          username: data.username,
          email: data.email,
          pictureUrl: data.pictureUrl,
          uid: userId,
        });
      }

      router.push("/(tabs)/explore");
    } catch (signInError) {
      if (signInError instanceof FirebaseError) {
        if (signInError.code === "auth/invalid-email") {
          Alert.alert("Invalid email", "Please enter a valid email address.");
        } else if (signInError.code === "auth/invalid-credential") {
          Alert.alert("Invalid credential", "Please enter a your email address and password.");
        } else if (signInError.code === "auth/too-many-requests") {
          Alert.alert("Too many requests attemps", "You have exceeded your maximum number of requests to this account. Please try again in a few minutes.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/images/bg-signIn.jpg")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.inputContainer}>
            <Entypo name="email" size={24} color="#222" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"#888"}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Entypo name="lock" size={24} color="#222" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"#888"}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
          </View>
          <View style={styles.forgotPwdContainer}>
            <Pressable
              onPress={() => router.push("/reset-password")}
              style={styles.forgotPwdLink}
            >
              <Text style={styles.forgotPwd}>Forgot password?</Text>
            </Pressable>
          </View>
          {loading ? (
            <View style={styles.loading}>
              <Loading size={100} />
            </View>
          ) : (
            <Pressable onPress={handleSignIn} style={styles.btn}>
              <Text style={styles.btnText}>Sign In</Text>
            </Pressable>
          )}
          <Pressable
            onPress={() => console.log("google sign-in")}
            style={styles.btnGoogle}
          >
            <AntDesign
              name="google"
              size={30}
              color="#222"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.btnGoogleText}>Sign In with Google</Text>
          </Pressable>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>Do you have an account? </Text>
            <Pressable onPress={() => router.push("/signUp")}>
              <Text style={styles.questionLink}>Sign Up</Text>
            </Pressable>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>I want to use Travelion </Text>
            <Pressable onPress={() => router.push("/explore")}>
              <Text style={styles.questionLink}>without Signing Up </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    width: wp(90),
    backgroundColor: "rgba(244, 244, 244, 0.7)",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: hp(5),
    fontWeight: "200",
    color: "#222",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    opacity: 0.8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 20,
    fontSize: hp(2),
    width: "100%",
  },
  forgotPwdContainer: {
    alignItems: "flex-end",
  },
  forgotPwdLink: {
    alignItems: "flex-end",
  },
  forgotPwd: {
    fontSize: 16,
    color: "#222",
    fontWeight: "300",
    marginBottom: 20,
  },
  loading: {
    marginVertical: 25,
  },
  btn: {
    paddingVertical: 15,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    opacity: 0.8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
    letterSpacing: 0.5,
  },
  btnGoogle: {
    flexDirection: "row",
    paddingVertical: 11,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    opacity: 0.8,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnGoogleText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#222",
    letterSpacing: 0.5,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  question: {
    fontSize: 16,
    color: "#222",
    fontWeight: "300",
  },
  questionLink: {
    textDecorationLine: "underline",
    fontWeight: "300",
    fontSize: 16,
    color: "#222",
  },
});
