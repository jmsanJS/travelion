import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
