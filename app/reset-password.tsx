import {
  View,
  Text,
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Entypo } from "@expo/vector-icons";
import Loading from "@/components/Loading";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async () => {
    if (email === "") {
      Alert.alert("Please enter your email address");
      return;
    }
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("An email has been sent");
      router.back();
    } catch (error) {
      const errorMsg = (error as Error).message;
      Alert.alert("Error sending email", errorMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ImageBackground
        source={require("../assets/images/bg-reset-password.jpg")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Reset password</Text>
          <Text style={styles.subtitle}>
            Enter the email associated with your account and we'll send you
            password reset instructions.
          </Text>
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

          {loading ? (
            <View style={styles.loading}>
              <Loading size={100} />
            </View>
          ) : (
            <Pressable onPress={handleResetPassword} style={styles.btn}>
              <Text style={styles.btnText}>Send Email</Text>
            </Pressable>
          )}
          <View style={styles.questionContainer}>
            <Text style={styles.question}>Return to </Text>
            <Pressable onPress={() => router.push("/explore")}>
              <Text style={styles.questionLink}>Sign In </Text>
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
    fontSize: hp(4),
    fontWeight: "200",
    color: "#222",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#222",
    fontWeight: "300",
    marginBottom: 15,
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
