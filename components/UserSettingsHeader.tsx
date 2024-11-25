import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function UserSettingsHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.topDesign_1}>
        <Pressable onPress={() => router.back()} style={styles.goBackBtn}>
          <Entypo name="chevron-left" size={30} color="#222" />
        </Pressable>
      </View>
      <View style={styles.topDesign_2}></View>
      <View style={styles.topDesign_3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
  },
  goBackBtn: {
    position: "absolute",
    top: 60,
    left: 30,
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 30,
  },
  topDesign_1: {
    height: hp(25),
    width: wp(100),
    backgroundColor: "#E5E6CA",
    borderBottomLeftRadius: hp(50),
  },
  topDesign_2: {
    height: hp(25),
    width: wp(100),
    backgroundColor: "#E5E6CA",
    zIndex: 1,
  },
  topDesign_3: {
    height: hp(25),
    width: wp(100),
    backgroundColor: "#FFF",
    borderTopRightRadius: hp(50),
    zIndex: 2,
    marginTop: hp(-25),
  },
});

