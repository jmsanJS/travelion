import { StyleSheet, ImageBackground, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <>
      <ImageBackground
        source={require("../assets/images/bg-welcome.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Animated.View entering={FadeInDown} style={styles.contentContainer}>
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={styles.background}
          />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Ready to explore new breathtaking places with us?
          </Text>
          <Pressable onPress={() => router.push("/explore")} style={styles.btn}>
            <Text style={styles.btnText}>Let's go!</Text>
          </Pressable>
        </Animated.View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: wp(100),
    height: hp(35),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 200,
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000",
    width: wp(50),
    borderRadius: 50,
    alignSelf: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: hp(2.5),
    fontWeight: "500",
    textAlign: "center",
    padding: hp(2),
    letterSpacing: 1,
  },
});
