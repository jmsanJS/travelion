import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { auth, db } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export default function signUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (!username || !email || !password || !passwordConfirmation || !checked) {
      Alert.alert("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      try {
        const docRef = await addDoc(collection(db, "users"), {
          username: username,
          email: email,
          userId: user.uid,
        });

        sendEmailVerification(user);
        Alert.alert("Please, check your email and verify your account.");

        router.push("/explore");
      } catch (firestoreError) {
        Alert.alert("Oops! Something went wrong. Please try again.");
      }
    } catch (authError) {
      if (authError instanceof FirebaseError) {
        const errorCode = authError.code;
        console.error("Error code: ", errorCode);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/images/bg-signUp.jpg")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formContainer}>
              <Text style={styles.title}>Sign Up</Text>
              <View style={styles.inputContainer}>
                <Entypo name="user" size={24} color="#222" />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor={"#888"}
                  keyboardType="default"
                  onChangeText={(value) => setUsername(value)}
                  value={username}
                />
              </View>
              <View style={styles.inputContainer}>
                <Entypo name="email" size={24} color="#222" />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={"#888"}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
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
              <View style={styles.inputContainer}>
                <Entypo name="lock" size={24} color="#222" />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  placeholderTextColor={"#888"}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={(value) => setPasswordConfirmation(value)}
                  value={passwordConfirmation}
                />
              </View>
              <View style={styles.termsContainer}>
                <Checkbox
                  style={styles.checkbox}
                  color={"#222"}
                  onValueChange={() => setChecked(!checked)}
                  value={checked}
                />
                <Text style={styles.checkboxText}>
                  By checking this box, you are agreeing to our terms of
                  service.
                </Text>
              </View>
              {loading ? (
                <View style={styles.loading}>
                  <Loading size={100} />
                </View>
              ) : (
                <Pressable onPress={handleSignUp} style={styles.btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
              )}
              <View style={styles.haveAnAccount}>
                <Text style={styles.question}>Do you have an account? </Text>
                <Pressable onPress={() => router.push("/signIn")}>
                  <Text style={styles.signInLink}>Sign In</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  scrollContainer: {
    flexGrow: 1,
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
    fontSize: hp(2),
    width: "100%",
  },
  termsContainer: {
    width: wp(85),
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
    marginTop: -15,
  },
  checkboxText: {
    fontWeight: "300",
    color: "#222",
    width: wp(70),
    fontSize: 15,
    marginTop: 10,
    marginBottom: 25,
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
  haveAnAccount: {
    flexDirection: "row",
    justifyContent: "center",
  },
  question: {
    fontSize: 16,
    color: "#222",
    fontWeight: "300",
  },
  signInLink: {
    textDecorationLine: "underline",
    fontWeight: "300",
    fontSize: 16,
    color: "#222",
  },
});
