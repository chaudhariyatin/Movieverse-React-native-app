import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { BASE_URL, ThUMBNAIL } from "../../constants";

const HorizonatalCard = ({ item, remove, displayBtn }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Details", { item: item })}
    >
      <View style={styles.card}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              item.poster_path === null
                ? ThUMBNAIL
                : BASE_URL + item.poster_path,
          }}
        />
        <View style={styles.details}>
          <View>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
          <View style={styles.subDetails}>
            <Text style={{ paddingRight: 30 }}>
              {item.release_date ? item.release_date.substring(0, 4) : "N/A"}
            </Text>
            <Text>
              <Ionicons name="ios-star-outline" size={15} color="black" />
              {item.vote_average ? item.vote_average : "N/A"}
            </Text>
            {displayBtn && (
              <View style={styles.buttonContainer}>
                <Button
                  title="Delete"
                  color="#d72323"
                  onPress={() => remove(item)}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  tinyLogo: {
    width: "20%",
    height: 90,
    borderRadius: 5,
  },
  details: {
    paddingHorizontal: 20,
  },
  movieTitle: {
    fontSize: 20,
    paddingVertical: 5,
  },
  subDetails: {
    flexDirection: "row",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 120,
    flexDirection: "row",
  },
});

export default HorizonatalCard;
