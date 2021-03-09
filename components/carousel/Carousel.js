import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CarouselCardMovies from "../cards/CarouselCardMovies";

const Carousel = (props) => {
  return (
    <View style={styles.carousel}>
      <View>
        <Text style={styles.carouselTitle}>{props.carouselTitle}</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.data}
        renderItem={({ item }) => {
          let updatedItem = null;
          if (!props.movieCard) {
            updatedItem = {
              ...item,
              title: item.name,
              release_date: item.first_air_date,
            };
          }
          return (
            <View>
              {props.movieCard && <CarouselCardMovies item={item} />}
              {!props.movieCard && <CarouselCardMovies item={updatedItem} />}
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: "45%",
    marginTop: 5,
  },
  carouselTitle: {
    fontSize: 20,
    paddingVertical: 5,
    paddingLeft: 10,
    marginLeft: 5,
    borderLeftColor: "black",
    borderLeftWidth: 4,
  },
});

export default Carousel;
