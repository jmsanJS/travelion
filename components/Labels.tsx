import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { categoriesList } from "@/constants/constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Labels() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const bubbleStyle = {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 7,
  };

  return (
    <View style={styles.container}>
      {categoriesList.map((item, index) => {
        let isActiveColor = item === selectedCategory ? "#FFA500" : "#000";
        let isActiveBtn = item === selectedCategory ? bubbleStyle : null;

        return (
          <Pressable
            key={index}
            style={[styles.category, isActiveBtn]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={[styles.categoryText, { color: isActiveColor }]}>
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dddd",
    padding: 10,
    borderRadius: 50,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: hp(2),
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
