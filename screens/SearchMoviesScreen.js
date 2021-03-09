import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaView } from "react-native";
import HorizonatalCard from "../components/cards/HorizonatalCard";
import useFetchSearchResults from "../hooks/useFetchSearchResults";

const SearchMoviesScreen = (props) => {
  const [query, setQuery] = useState("");
  const searchResults = useFetchSearchResults(query);

  const getQueryHandler = (enteredText) => {
    setQuery(enteredText);
  };

  let display = (
    <FlatList
      data={searchResults}
      renderItem={({ item }) => (
        <HorizonatalCard item={item} displayBtn={false} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
  if (!searchResults) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <SearchBar
            value={query}
            onChangeText={getQueryHandler}
            placeholder="Search movie"
            lightTheme
            showLoading={false}
            round
            containerStyle={{
              backgroundColor: "white",
              marginBottom: 20,
            }}
            inputContainerStyle={{
              backgroundColor: "white",
            }}
          />
          {display}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  textContainer: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default SearchMoviesScreen;
