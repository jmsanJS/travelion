import { FavoritesContextProvider } from "@/context/favoritesContext";
import { SettingsContextProvider } from "@/context/settingsContext";
import { UserContextProvider } from "@/context/userContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserContextProvider>
      <SettingsContextProvider>
        <FavoritesContextProvider>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="index"
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="signIn" />
            <Stack.Screen name="reset-password" />
            <Stack.Screen name="signUp" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="destination" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </FavoritesContextProvider>
      </SettingsContextProvider>
    </UserContextProvider>
  );
}
