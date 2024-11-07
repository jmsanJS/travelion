import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

type SearchBarComponentProps = {};

const SearchBarComponent: React.FunctionComponent<
  SearchBarComponentProps
> = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Type a destination"
        placeholderTextColor={"gray"}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        onChangeText={updateSearch}
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
    backgroundColor: "#ddd",
    borderRadius: 50,
    padding: 3,
  },
  inputStyle: {
    color: "#000"
  }
});

export default SearchBarComponent;
