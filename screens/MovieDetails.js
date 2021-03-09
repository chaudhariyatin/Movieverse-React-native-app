import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/action";
import useFetchMovieById from "../hooks/useFetchMovieById";
import { BASE_URL, ThUMBNAIL } from "../constants";
import {
  addToFavouritesHandler,
  isExist,
  removeFromFavouritesHandler,
  upperCaseFirstletter,
} from "../UtilityFunctions/uitilityFunctions";

const MovieDetails = (props) => {
  const item = props.route.params.item;
  const movieData = useFetchMovieById(item.id);
  const { favoriteMovies, addToFavorites, removeFromFavorites } = props;

  if (!movieData) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size={30} color="#50c4ed" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri:
                item.poster_path === null
                  ? ThUMBNAIL
                  : BASE_URL + item.poster_path,
            }}
          />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <View>
              <Text style={styles.subTitle}>
                {item.release_date ? item.release_date.substring(0, 4) : "N/A"}
              </Text>
              <Text style={styles.subTitle}>
                Language: {upperCaseFirstletter(item.original_language)}
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>
                <Ionicons name="ios-star-outline" size={24} color="black" />
                {item.vote_average ? item.vote_average : "N/A"}
              </Text>
              <Text style={styles.subTitle}>
                <MaterialCommunityIcons
                  name="vote-outline"
                  size={24}
                  color="black"
                />
                {item.vote_count}
              </Text>
              <Text style={styles.subTitle}>
                <Ionicons
                  name="people-outline"
                  size={20}
                  styles={{ paddingLeft: 10 }}
                  color="black"
                />
                {"  "}
                {item.popularity}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.genresContainer}>
            <Text style={{ fontSize: 20, paddingTop: 5 }}>Genres</Text>
            {movieData.genres.map((g) => (
              <Text style={styles.genres} key={g.id}>
                {g.name}
              </Text>
            ))}
          </View>
          <Text style={styles.overview}>{item.overview}</Text>
          <View style={styles.button}>
            {!isExist(item, favoriteMovies) && (
              <Button
                title=" + Favorites"
                onPress={() => addToFavouritesHandler(item, addToFavorites)}
              />
            )}
            {isExist(item, favoriteMovies) && (
              <Button
                color="#d72323"
                title="Remove"
                onPress={() =>
                  removeFromFavouritesHandler(item, removeFromFavorites)
                }
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    marginVertical: 5,
    marginHorizontal: 2,
  },
  topContainer: {
    flexDirection: "row",
    height: "30%",
    width: "100%",
    marginVertical: 5,
    marginHorizontal: 15,
  },
  bottomContainer: {
    justifyContent: "center",
    height: "60%",
  },
  image: {
    height: "100%",
    width: "30%",
  },
  details: {
    paddingHorizontal: 15,
    width: "55%",
    height: "100%",
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    paddingLeft: 5,
    marginVertical: 5,
  },
  subTitle: { paddingVertical: 3, paddingLeft: 6 },
  bottomContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  genresContainer: {
    flexDirection: "row",
  },
  genres: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
  },

  overview: {
    fontSize: 15,
  },
  carousel: {
    height: "40%",
  },
  button: {
    width: "40%",
    marginTop: 40,
    marginHorizontal: 110,
  },
});

const mapStateToProps = (state) => ({
  favoriteMovies: state.movieReducer.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (movie) => dispatch(addToFavorites(movie)),
    removeFromFavorites: (movie) => dispatch(removeFromFavorites(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
