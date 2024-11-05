import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "@/components/Categories";
import SortCategories from "@/components/SortCategories";
import Destinations from "@/components/Destinations";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's Explore</Text>
          <Pressable onPress={() => console.log("press")}>
            <Image
              source={require("../../assets/images/avatar1.jpeg")}
              style={styles.userImg}
            />
          </Pressable>
        </View>

        <View style={styles.searchBar}>
          <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
          <TextInput
            placeholder="Type a destination"
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
        </View>

          <Categories />
          <SortCategories />
          <Destinations />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ddd",
    borderRadius: 30,
    marginVertical: 20,
  },
  searchInput: {
    paddingLeft: 10,
    fontSize: hp(2),
  },
});
