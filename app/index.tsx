import { StyleSheet, ImageBackground, View, Text } from "react-native";
import React from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg-welcome.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Welcome
          </Text>
          <Text style={styles.subtitle}>
            Explore new breathtaking places with us
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    width: wp(90)
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
