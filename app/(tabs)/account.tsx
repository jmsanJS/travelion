import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { useUser } from "@/context/userContext";
import { blurhash } from "@/constants/constants";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Account() {
  const { user } = useUser();
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
      <View style={styles.topUsersInfoContainer}>
        <Image
          source={user?.pictureUrl}
          style={styles.profileImg}
          placeholder={{ blurhash }}
        />
        <Text style={styles.username}>Juanboca</Text>
        <Text style={styles.email}>example@gmail.com</Text>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable
          onPress={() => console.log("setting")}
          style={styles.settingContainer}
        >
          <View style={{ flexDirection: "row" }}>
            <Entypo name="suitcase" size={24} color="#222" />
            <Text style={styles.settingText}>Booked trips</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
        <Pressable style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="heart" size={24} color="#222" />
            <Text style={styles.settingText}>Liked destinations</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
        <Pressable style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="edit" size={24} color="#222" />
            <Text style={styles.settingText}>Update your username</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
        <Pressable style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="image" size={24} color="#222" />
            <Text style={styles.settingText}>Update your profile image</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
        <Pressable style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="lock" size={24} color="#222" />
            <Text style={styles.settingText}>Change your password</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
        <Pressable style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="email" size={24} color="#222" />
            <Text style={styles.settingText}>Change your email</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
        <Pressable style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="log-out" size={24} color="#222" />
            <Text style={styles.settingText}>Log out</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#222" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
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
  username: {
    fontSize: hp(4),
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center",
    marginTop: 10,
  },
  email: {
    fontSize: hp(2),
    textAlign: "center",
    color: "#777"
  },
  settingsContainer: {
    width: wp(100),
    paddingHorizontal: wp(8),
  },
  settingContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  settingText: {
    fontSize: hp(2),
    fontWeight: "500",
    marginLeft: 15,
    color: "#222",
  },
});
