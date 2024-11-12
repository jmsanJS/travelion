import React from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

interface SearchBarComponentProps {
  search: string;
  setSearch: (text: string) => void;
}

const SearchBarComponent: React.FunctionComponent<SearchBarComponentProps> = ({
  search,
  setSearch,
}) => {
  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Type a destination"
        placeholderTextColor={"#777"}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={{ color: "#000" }}
        searchIcon={{ color: "#777" }}
        clearIcon={{ color: "#777" }}
        onChangeText={setSearch}
        autoCorrect={false}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
  },
  containerStyle: {
    backgroundColor: "transparent",
    padding: 0,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  inputContainerStyle: {
    backgroundColor: "#C3C99D",
    borderRadius: 50,
    padding: 3,
  },
});

export default SearchBarComponent;
