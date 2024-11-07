import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/constants/constants";

interface SearchDestinationProps {
  search: string;
}

export default function Destinations({ search }: SearchDestinationProps) {
  const searchFilter = destinations.filter((destination) =>
    destination.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destinations</Text>
      {searchFilter.length > 0 ? (
        <ScrollView
          style={styles.scroll}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {searchFilter.map((item, index) => (
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
  },
  noResultsContainer: {
    marginVertical: hp(10),
    alignItems: "center",
  },
  notFound: {
    fontSize: hp(1.8),
    color: "gray",
  },
});
