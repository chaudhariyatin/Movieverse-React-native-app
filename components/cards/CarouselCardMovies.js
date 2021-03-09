import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/action";
import { Ionicons } from "@expo/vector-icons";
import { BASE_URL, ThUMBNAIL } from "../../constants";
import {
  addToFavouritesHandler,
  isExist,
  removeFromFavouritesHandler,
} from "../../UtilityFunctions/uitilityFunctions";

const CarouselCardMovies = (props) => {
  const { item, favoriteMovies, addToFavorites, removeFromFavorites } = props;
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Details", {
          item: item,
        })
      }
    >
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri:
              item.poster_path === null
                ? ThUMBNAIL
                : BASE_URL + item.poster_path,
          }}
        />
        <View style={styles.details}>
          <Text style={{ color: "black" }}>
            <Ionicons name="ios-star-outline" size={15} color="black" />
            {item.vote_average ? item.vote_average : "N/A"}
          </Text>
          <Text
            numberOfLines={1}
            style={{ color: "black", overflow: "hidden" }}
          >
            {item.title}
          </Text>
          <Text style={{ color: "black" }}>
            {item.release_date ? item.release_date.substring(0, 4) : "N/A"}
          </Text>
        </View>
        <View style={styles.button}>
          {!isExist(item, favoriteMovies) && (
            <Button
              title=" + Favorites"
              onPress={() => addToFavouritesHandler(item, addToFavorites)}
            />
          )}
          {isExist(item, favoriteMovies) && (
            <Button
              title="Added"
              onPress={() =>
                removeFromFavouritesHandler(item, removeFromFavorites)
              }
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: 5,
    marginVertical: 15,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: "50%",
    backgroundColor: "#000",
    marginBottom: 10,
  },
  details: {
    paddingLeft: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
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

export default connect(mapStateToProps, mapDispatchToProps)(CarouselCardMovies);
