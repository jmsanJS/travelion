import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import {
  CalendarIcon,
  ChevronLeftIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useFavorites } from "@/context/favoritesContext";
import {
  celsiusToFarenheit,
  kilometersToMiles,
  usdToEur,
} from "@/modules/unitsConvertions";
import { useSettings } from "@/context/settingsContext";
import { useBookedDestination } from "@/context/bookedContext";

export default function DestinationScreen() {
  const {
    id,
    title,
    duration,
    distance,
    weather,
    price,
    shortDesc,
    longDesc,
    image,
  } = useLocalSearchParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isKm, isEUR, isCelsius } = useSettings();
  const { toogleBookedDestination, bookedDestinations, isBooked } =
    useBookedDestination();

  // Correct type for id (only string type)
  const destinationId = Array.isArray(id) ? id[0] : id;

  const priceConversion = () => {
    if (isEUR) return "€ " + usdToEur(price);
    else return "$ " + price;
  };

  const distanceConversion = () => {
    if (isKm) return distance + " km";
    else return kilometersToMiles(distance) + " mi";
  };

  const temperatureConversion = () => {
    if (isCelsius) return weather + " °C";
    else return celsiusToFarenheit(weather) + " °F";
  };

  const handleBooking = () => {
    Alert.alert(
      "Booking confirmation",
      "Are you sure you want to book this destination? This action can be undone later.",
      [
        {
          text: "Yes, I'm sure",
          onPress: () => {
            toogleBookedDestination(destinationId);
          },
        },
        {
          text: "No, I'll decide later",
          style: "cancel",
          onPress: () => {},
        },
      ]
    );
  };

  const handleCancelBooking = () => {
    Alert.alert(
      "Cancel Reservation",
      "Do your really want to cancel your reservation?",
      [
        {
          text: "Yes",
          onPress: () => {
            toogleBookedDestination(destinationId);
          },
        },
        {
          text: "No",
          style: "cancel",
          onPress: () => {},
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={image} style={styles.img} />

      <SafeAreaView style={styles.headerIconsContainer}>
        <Pressable style={styles.headerIcon} onPress={() => router.back()}>
          <ChevronLeftIcon size={hp(4)} color={"#FFF"} />
        </Pressable>
        <Pressable
          style={styles.headerIcon}
          onPress={() => toggleFavorite(destinationId)}
        >
          <HeartIcon
            size={hp(4)}
            color={isFavorite(destinationId) ? "#E25050" : "#FFF"}
          />
        </Pressable>
      </SafeAreaView>

      <View style={styles.contentContainer}>
        <View style={styles.headerContentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{priceConversion()}</Text>
        </View>
        <Text style={styles.desc}>{longDesc}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.miscContainer}>
            <CalendarIcon size={30} color={"red"} />
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.miscText}>{duration}</Text>
              <Text>Duration</Text>
            </View>
          </View>
          <View style={styles.miscContainer}>
            <MapPinIcon size={30} color={"red"} />
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.miscText}>{distanceConversion()}</Text>
              <Text>Distance</Text>
            </View>
          </View>
          <View style={styles.miscContainer}>
            <SunIcon size={30} color={"#FFD500"} />
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.miscText}>{temperatureConversion()}</Text>
              <Text>Weather</Text>
            </View>
          </View>
        </View>
        {isBooked(destinationId) ? (
          <Pressable onPress={handleCancelBooking} style={styles.bookedBtn}>
            <Text style={styles.bookedBtnText}>Booked</Text>
          </Pressable>
        ) : (
          <Pressable onPress={handleBooking} style={styles.bookBtn}>
            <Text style={styles.bookBtnText}>Book</Text>
          </Pressable>
        )}
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
  img: {
    height: hp(55),
    width: wp(100),
  },
  headerIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "absolute",
    width: wp(90),
    left: wp(5),
  },
  headerIcon: {
    padding: 10,
    backgroundColor: "rgba(50,50,50,0.3)",
    borderRadius: 50,
  },
  contentContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: -50,
    justifyContent: "space-evenly",
    backgroundColor: "#FFF",
  },
  headerContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp(4),
    fontWeight: "500",
    maxWidth: wp(60),
  },
  price: {
    fontSize: hp(4),
    fontWeight: "500",
    color: "#FFA500",
  },
  desc: {
    paddingVertical: 25,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  miscContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  durationContainer: {
    flexDirection: "row",
  },
  miscText: {
    fontSize: hp(2.2),
    fontWeight: "500",
  },
  bookBtn: {
    backgroundColor: "#000",
    width: wp(50),
    marginTop: 30,
    borderRadius: 50,
    alignSelf: "center",
  },
  bookBtnText: {
    color: "#fff",
    fontSize: hp(2.5),
    fontWeight: "500",
    textAlign: "center",
    padding: hp(2),
    letterSpacing: 1,
  },
  bookedBtn: {
    backgroundColor: "#FFF",
    borderColor: "#2AAA8A",
    borderWidth: 2,
    borderRadius: 50,
    width: wp(50),
    marginTop: 30,
    alignSelf: "center",
  },
  bookedBtnText: {
    color: "#2AAA8A",
    fontSize: hp(2.5),
    fontWeight: "500",
    textAlign: "center",
    padding: hp(2),
    letterSpacing: 1,
  },
});
