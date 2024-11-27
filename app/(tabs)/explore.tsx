import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Categories from "@/components/Categories";
import Labels from "@/components/Labels";
import Destinations from "@/components/Destinations";
import SearchBarComponent from "@/components/SearchBar";
import { useState } from "react";
import { useUser } from "@/context/userContext";
import { blurhash } from "@/constants/constants";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");
  const [searchByLabel, setSearchByLabel] = useState("");
  const { user, isAuthenticated } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's Explore</Text>
          {isAuthenticated ? (
            <Image
              source={user?.pictureUrl}
              style={styles.userImg}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          ) : null}
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
        <Text style={styles.destinationsTitle}>Destinations</Text>
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
    backgroundColor: "#E5E6CA",
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
    marginBottom: 5,
  },
  userImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#333",
  },
  destinationsTitle : {
    fontSize: 18,
    fontWeight: "500",
  }
});
