import {
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/bg-welcome.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Animated.Text
          entering={FadeIn.delay(500).duration(1000)}
          style={styles.logo}
        >
          travelion
        </Animated.Text>
        <Animated.View
          entering={FadeInDown}
          style={styles.contentContainer}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={styles.background}
          />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Ready to explore new breathtaking places with us?
          </Text>
          <Pressable
            onPress={() => router.push("/signIn")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Let's go!</Text>
          </Pressable>
        </Animated.View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaContent: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(100)
  },
  logo: {
    fontSize: hp(8),
    letterSpacing: 1,
    fontWeight: "100",
    color: "#fff",
    width: wp(90),
    textAlign: "right",
    marginTop: hp(7),
  },
  contentContainer: {
    width: wp(100),
    height: hp(37),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp(30),
  },
  title: {
    color: "#fff",
    fontSize: hp(5.5),
    fontWeight: "200",
    letterSpacing: 2,
  },
  subtitle: {
    color: "#fff",
    width: wp(85),
    fontSize: hp(2.2),
    fontWeight: "300",
    letterSpacing: 1,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#000",
    width: wp(50),
    borderRadius: 50,
    alignSelf: "center",
    paddingVertical: hp(1.5),
    marginBottom: 10
  },
  btnText: {
    color: "#fff",
    fontSize: hp(2.5),
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 1,
  },
});
