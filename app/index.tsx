import { View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import Welcome from "@/components/Welcome";
import { useRouter } from "expo-router";
import { useUser } from "@/context/userContext";

export default function Index() {
  const { isAuthenticated, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/(tabs)/explore");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {!isAuthenticated && <Welcome />}
    </View>
  );
}
