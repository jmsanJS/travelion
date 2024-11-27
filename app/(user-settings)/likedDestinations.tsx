import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  View,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Destinations from "@/components/Destinations";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LikedDestinations() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()} style={styles.goBackBtn}>
          <Entypo name="chevron-left" size={30} color="#222" />
        </Pressable>
        <Text style={styles.title}>Liked Destinations</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.destinationsContainer}
      >
        <Destinations search="" searchByCategory="" searchByLabel="Liked" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E6CA",
  },
  headerContainer: {
    width: wp(85),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10
  },
  goBackBtn: {
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 30,
  },
  title: {
    textAlign: "center",
    fontSize: hp(3.2),
    color: "#222",
    marginBottom: 5,
  },
  destinationsContainer: {
    width: wp(90),
    alignSelf: "center",
  },
});
