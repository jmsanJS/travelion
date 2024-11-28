import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BookedDestinationCard from "@/components/BookedDestinationCard";
import { useBookedDestination } from "@/context/bookedContext";
import { destinations } from "@/constants/constants";

export default function BookedDestinations() {
  const router = useRouter();
  const { bookedDestinations } = useBookedDestination();
  const bookedTripsData = [];

  if (bookedDestinations.length > 0) {
    for (const destination of destinations) {
      for (const bookedId of bookedDestinations) {
        if (destination.id === Number(bookedId)) {
          bookedTripsData.push(destination);
        }
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()} style={styles.goBackBtn}>
          <Entypo name="chevron-left" size={30} color="#222" />
        </Pressable>
        <Text style={styles.title}>Booked Destinations</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.destinationsContainer}
      >
        {bookedDestinations.length > 0 ? (
          bookedTripsData.map((item, index) => {
            return <BookedDestinationCard {...item} key={index} />
          })
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.notFound}>No booked destinations found.</Text>
            <Text style={styles.notFound}>Have you already booked a trip?</Text>
          </View>
        )}
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
    marginBottom: 10,
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
    paddingVertical: 10,
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
