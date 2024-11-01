import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function ExploreScreen() {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text>Explore Screen</Text>
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
