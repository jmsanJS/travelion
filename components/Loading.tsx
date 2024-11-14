import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

type LoadingProps = { size: number };

export default function Loading({ size }: LoadingProps) {
  return (
    <View>
      <LottieView
        style={{ height: size }}
        source={require("../assets/images/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}
