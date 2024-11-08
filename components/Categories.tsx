import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { categoriesImg } from "@/constants/constants";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CategoriesProps {
  searchByCategory: string;
  setSearchByCategory: (category: string) => void;
}

const Categories: React.FunctionComponent<CategoriesProps> = ({
  searchByCategory,
  setSearchByCategory,
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categories</Text>
        <Pressable>
          <Text onPress={() => setSearchByCategory("")} style={styles.seeAllCat}>See all</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoriesImg.map((category, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => setSearchByCategory(category.title)}
              style={styles.categoryContainer}
            >
              <Image source={category.image} style={styles.img} />
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp(2),
    fontWeight: "500",
  },
  seeAllCat: {
    fontSize: hp(2),
    color: "#FFA500",
    fontWeight: "bold",
  },
  scroll: {
    marginVertical: 15,
  },
  categoryContainer: {
    height: "auto",
    width: 80,
    marginEnd: 15,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 25,
  },
  categoryTitle: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default Categories;