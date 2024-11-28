import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { useSettings } from "@/context/settingsContext";
import { kilometersToMiles, usdToEur } from "@/modules/unitsConvertions";
import { DestinationProps } from "./DestinationCard";

export default function BookedDestination(props: DestinationProps) {
  const { isEUR, isKm } = useSettings();

  const distanceConversion = (distance: number) => {
    if (isKm) return distance + " km";
    else return kilometersToMiles(String(distance)) + " mi";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.miscContainer}>
        <View style={{ flexDirection: "row" }}>
          <CalendarIcon size={20} color={"#408888"} />
          <Text style={styles.duration}>{props.duration}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MapPinIcon size={20} color={"#408888"} />
          <Text style={styles.distance}>
            {distanceConversion(props.distance)}
          </Text>
        </View>
        {isEUR ? (
          <View style={{ flexDirection: "row" }}>
            <CurrencyEuroIcon size={20} color={"#408888"} />
            <Text style={styles.price}>{usdToEur(String(props.price))}</Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <CurrencyDollarIcon size={20} color={"#408888"} />
            <Text style={styles.price}>{props.price}</Text>
          </View>
        )}
      </View>
      <Text style={styles.desc}>{props.shortDesc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#666",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    color: "#222",
    fontSize: hp(2.7),
    fontWeight: "600",
    marginBottom: 5,
  },
  miscContainer: {
    color: "#222",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 7,
  },
  duration: {
    color: "#222",
    fontSize: hp(1.8),
    fontWeight: "500",
    marginLeft: 3,
  },
  distance: {
    color: "#222",
    fontSize: hp(1.8),
    fontWeight: "500",
    marginLeft: 3,
  },
  price: {
    color: "#222",
    fontSize: hp(1.8),
    fontWeight: "500",
    marginLeft: 3,
  },
  desc: {
    color: "#222",
  },
});
