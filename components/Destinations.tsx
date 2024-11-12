import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/constants/constants";
import { useFavorites } from "@/context/favoritesContext";

interface SearchDestinationProps {
  search: string;
  searchByCategory: string;
  searchByLabel: string;
}

export default function Destinations({
  search,
  searchByCategory,
  searchByLabel,
}: SearchDestinationProps) {
  const { favorites } = useFavorites();

  const combinedFilter = destinations.filter((destination) => {
    const matchedSearch = search
      ? destination.title.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchedCategory = searchByCategory
      ? destination.category.includes(searchByCategory)
      : true;
    const matchedLabel =
      searchByLabel === "All"
        ? true
        : searchByLabel === "Liked"
        ? favorites.includes(String(destination.id))
        : destination.label.includes(searchByLabel);

    return matchedSearch && matchedCategory && matchedLabel;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destinations</Text>
      {combinedFilter.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          {combinedFilter.map((item, index) => (
            <DestinationCard {...item} key={index} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.notFound}>No destinations found...</Text>
          <Text style={styles.notFound}>Please try again</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  scroll: {
    marginVertical: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: wp(5),
  },
  noResultsContainer: {
    marginVertical: hp(10),
    alignItems: "center",
  },
  notFound: {
    fontSize: hp(1.8),
    color: "#777",
  },
});
