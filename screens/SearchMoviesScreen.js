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

import { SafeAreaView } from "react-navigation";
import HorizonatalCard from "../components/cards/HorizonatalCard";

const SearchMoviesScreen = (props) => {
  const [searchResults, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");

  const getQueryHandler = (enteredText) => {
    setQuery(enteredText);
  };

  useEffect(() => {
    if (query) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=013e8eaf02d53715c726d16bd5c15e44&language=en-US&query=${query}&page=1&include_adult=false`;
      axios
        .get(url)
        .then((res) => {
          setSearchResult(res.data.results);
        })
        .catch((err) => console.log(err));
    }
    console.log("xxxx", query);
  }, [query]);

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
