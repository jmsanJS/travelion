import UserSettingsHeader from "@/components/UserSettingsHeader";
import { useSettings } from "@/context/settingsContext";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function SettingsScreen() {
  // const [isEnabled, setIsEnabled] = useState(false);
  const { toggleDegrees, toggleDistance, togglePrice, isKm, isCelsius, isEUR } = useSettings();

  return (
    <View style={styles.container}>
      <UserSettingsHeader />
      <View style={styles.allSettingsContainer}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="location" size={24} color="#222" />
            <Text style={styles.settingText}>Distance: mi - km</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#E5E6CA" }}
            thumbColor={isKm ? "#22623C" : "#f4f3f4"}
            ios_backgroundColor="#777"
            onValueChange={toggleDistance}
            value={isKm}
          />
        </View>
        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="light-up" size={24} color="#222" />
            <Text style={styles.settingText}>Degrees: °F - °C</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#E5E6CA" }}
            thumbColor={isCelsius ? "#22623C" : "#f4f3f4"}
            ios_backgroundColor="#777"
            onValueChange={toggleDegrees}
            value={isCelsius}
          />
        </View>
        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="price-tag" size={24} color="#222" />
            <Text style={styles.settingText}>Price: USD - EUR</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#E5E6CA" }}
            thumbColor={isEUR ? "#22623C" : "#f4f3f4"}
            ios_backgroundColor="#777"
            onValueChange={togglePrice}
            value={isEUR}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  allSettingsContainer: {
    width: wp(100),
    paddingHorizontal: wp(8),
    position: "absolute",
    top: hp(32)
    // backgroundColor: "#DDD"
  },
  title: {
    fontSize: hp(3.2),
    color: "#222",
    textAlign: "center",
    marginBottom: 50,
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
