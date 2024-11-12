import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { labels } from "@/constants/constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface LabelsProps {
  searchByLabel: string;
  setSearchByLabel: (label: string) => void;
}

export default function Labels({
  searchByLabel,
  setSearchByLabel,
}: LabelsProps) {
  const [selectedLabel, setSelectedLabel] = useState<string>("All");

  const handleSelectedLabelClick = (label: string) => {
    setSelectedLabel(label);
    setSearchByLabel(label);
  };
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
      {labels.map((label, index) => {
        let isActiveColor = label === selectedLabel ? "#E25050" : "#000";
        let isActiveBtn = label === selectedLabel ? bubbleStyle : null;

        return (
          <Pressable
            key={index}
            style={[styles.category, isActiveBtn]}
            onPress={() => handleSelectedLabelClick(label)}
          >
            <Text style={[styles.categoryText, { color: isActiveColor }]}>
              {label}
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
    backgroundColor: "#C3C99D",
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
