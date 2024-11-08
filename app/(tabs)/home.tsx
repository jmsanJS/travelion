import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Categories from "@/components/Categories";
import Labels from "@/components/Labels";
import Destinations from "@/components/Destinations";
import SearchBarComponent from "@/components/SearchBar";
import { useState } from "react";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");
  const [searchByLabel, setSearchByLabel] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's Explore</Text>
          <Pressable onPress={() => console.log("press")}>
            <Image
              source={require("../../assets/images/avatar1.jpeg")}
              style={styles.userImg}
            />
          </Pressable>
        </View>

        <SearchBarComponent search={search} setSearch={setSearch} />
        <Categories
          searchByCategory={searchByCategory}
          setSearchByCategory={setSearchByCategory}
        />
        <Labels
          searchByLabel={searchByLabel}
          setSearchByLabel={setSearchByLabel}
        />
        <Destinations
          search={search}
          searchByCategory={searchByCategory}
          searchByLabel={searchByLabel}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  title: {
    fontSize: hp(3.5),
    fontWeight: "bold",
    letterSpacing: 1,
  },
  userImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#333",
  },
});
