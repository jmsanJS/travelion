import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/constants/constants";

export default function Destinations() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destinations</Text>
      <ScrollView
        style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {destinations.map((item, index) => {
          return <DestinationCard {...item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp(2),
    fontWeight: "500",
  },
  seeAllCat: {
    fontSize: hp(2),
    color: "#FFA500",
    fontWeight: "bold",
  },
  scroll: {
    marginVertical: 15,
  },
  categoryContainer: {
    height: "auto",
    width: 80,
    marginEnd: 15,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 25,
  },
  categoryTitle: {
    marginTop: 10,
    textAlign: "center",
  },
});
