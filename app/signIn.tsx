import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
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

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
          <Pressable
            onPress={() => console.log("forgot")}
            style={styles.forgotPwdContainer}
          >
            <Text style={styles.forgotPwd}>Forgot password?</Text>
          </Pressable>
          {loading ? (
            <View style={styles.loading}>
              <Loading size={100} />
            </View>
          ) : (
            <Pressable onPress={() => console.log("signIn")} style={styles.btn}>
              <Text style={styles.btnText}>Sign In</Text>
            </Pressable>
          )}
          <Pressable
            onPress={() => console.log("google")}
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
          <View style={styles.noAccount}>
            <Text style={styles.question}>Do you have an account? </Text>
            <Pressable onPress={() => router.push("/signUp")}>
              <Text style={styles.signUpLink}>Sign Up</Text>
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
    fontSize: hp(2),
    width: "100%",
  },
  forgotPwdContainer: {
    alignItems: "flex-end",
  },
  forgotPwd: {
    fontSize: 16,
    color: "#222",
    fontWeight: "300",
    marginBottom: 20,
  },
  loading: {
    marginVertical: 20,
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
  noAccount: {
    flexDirection: "row",
    justifyContent: "center",
  },
  question: {
    fontSize: 16,
    color: "#222",
    fontWeight: "300",
  },
  signUpLink: {
    textDecorationLine: "underline",
    fontWeight: "300",
    fontSize: 16,
    color: "#222",
  },
});