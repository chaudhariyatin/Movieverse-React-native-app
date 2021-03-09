import React, { useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import Carousel from "../components/carousel/Carousel";
import {
  fetchMovies,
  removeFromFavorites,
  addToFavorites,
} from "../redux/action";
const TvShowsScreen = (props) => {
  const { movieReducer, fetchMovies } = props;
  const { topRatedShows, airingToday } = movieReducer;

  useEffect(() => {
    fetchMovies("popular", "tv");
    fetchMovies("airing_today", "tv");
  }, []);

  if (!airingToday) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.screenTitle}>TV Shows</Text>
      </View>
      <Carousel
        data={topRatedShows}
        carouselTitle="Top Rated TV Shows"
        movieCard={false}
      />
      <Carousel
        data={airingToday}
        carouselTitle="Airing Today"
        movieCard={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
  },
  screenTitle: {
    fontSize: 25,
    paddingVertical: 10,
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => ({
  movieReducer: state.movieReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (category, type) => dispatch(fetchMovies(category, type)),
    addToFavorites: (movie) => dispatch(addToFavorites(movie)),
    removeFromFavorites: (movie) => dispatch(removeFromFavorites(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsScreen);
