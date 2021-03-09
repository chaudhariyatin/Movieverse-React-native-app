import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import HorizonatalCard from "../components/cards/HorizonatalCard";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/action";

const FavoriteMoviesScreen = (props) => {
  const { favoriteMovies, removeFromFavorites } = props;
  if (!favoriteMovies) {
    return (
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  let display = (
    <FlatList
      horizontal={false}
      showsVerticalScrollIndicator={false}
      data={favoriteMovies}
      renderItem={({ item }) => (
        <HorizonatalCard
          item={item}
          remove={removeFromFavorites}
          displayBtn={true}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
  if (favoriteMovies.length === 0) {
    display = (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          height: "80%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          Looks like you don't have favorites!!!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.screenTitle}>Favorites</Text>
      </View>
      {display}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 25,
    paddingVertical: 10,
    paddingLeft: 20,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteMoviesScreen);
