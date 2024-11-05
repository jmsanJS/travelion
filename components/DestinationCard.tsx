import { Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";

interface DestinationProps {
  title: string;
  duration: string;
  distance: number;
  weather: number;
  price: number;
  shortDesc: string;
  longDesc: string;
  image: ImageSourcePropType;
}

export default function DestinationCard(props: DestinationProps) {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  return (
    <Pressable style={styles.clickableImg} onPress={() => console.log("press")}>
      <Image source={props.image} style={styles.img} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.background}
      />
      <Pressable style={styles.heart} onPress={() => setIsFavorited(!isFavorited)}>
        <HeartIcon size={wp(5)} color={isFavorited ? "#FFA500" : "#FFF"} />
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.shortDesc}>{props.shortDesc}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  clickableImg: {
    height: hp(30),
    width: wp(40),
    marginRight: 15,
    borderRadius: 40,
    position: "relative",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingVertical: 20
  },
  img: {
    height: hp(30),
    width: wp(40),
    borderRadius: 40,
    position: "absolute"
  },
  background: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: hp(17),
  },
  heart: {
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "rgba(50,50,50,0.3)",
    borderRadius: 20,
    padding: 10
  },
  title: {
    fontSize: hp(2),
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#FFF",
    marginBottom: 5,
  },
  shortDesc: {
    fontSize: hp(1.4),
    color: "#FFF",
    fontWeight: "500",
  }
});
