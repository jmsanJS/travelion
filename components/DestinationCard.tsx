import { Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
import { useFavorites } from "@/context/favoritesContext";

interface DestinationProps {
  id: number;
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
  const router = useRouter();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  // Necessary to view the favorited destinations in home screen
  useEffect(() => {}, [favorites]);

  return (
    <Pressable
      style={styles.clickableImg}
      onPress={() =>
        router.push({ pathname: "/destination", params: { ...props } })
      }
    >
      <Image source={props.image} style={styles.img} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,1)"]}
        style={styles.background}
      />
      <Pressable
        style={styles.heart}
        onPress={() => toggleFavorite(String(props.id))}
      >
        <HeartIcon
          size={wp(5)}
          color={isFavorite(String(props.id)) ? "#E25050" : "#FFF"}
        />
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
    borderRadius: 40,
    position: "relative",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  img: {
    height: hp(30),
    width: wp(40),
    borderRadius: 40,
    position: "absolute",
  },
  background: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: hp(20),
  },
  heart: {
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "rgba(50,50,50,0.3)",
    borderRadius: 20,
    padding: 10,
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
    fontWeight: "600",
  },
});
