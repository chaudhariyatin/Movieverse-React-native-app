import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Carousel from "../components/carousel/Carousel";
import { connect } from "react-redux";
import {
  fetchMovies,
  removeFromFavorites,
  addToFavorites,
} from "../redux/action";

const MoviesScreen = (props) => {
  const {
    movieReducer,
    fetchMovies,
    addToFavorites,
    removeFromFavorites,
  } = props;
  const { topRatedMovies, nowPlayingMovies, favoriteMovies } = movieReducer;

  useEffect(() => {
    fetchMovies("top_rated", "movie");
    fetchMovies("now_playing", "movie");
  }, []);

  if (!nowPlayingMovies) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.screenTitle}>Movies</Text>
      </View>
      <Carousel
        data={topRatedMovies}
        carouselTitle="Top Rated Movies"
        movieCard={true}
      />
      <Carousel
        data={nowPlayingMovies}
        carouselTitle="Now Playing"
        movieCard={true}
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
