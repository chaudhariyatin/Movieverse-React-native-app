import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "../../screens/MovieDetails";
import FavoriteMoviesScreen from "../../screens/FavoriteMoviesScreen";

const FavoriteScreenNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        options={{ headerShown: false }}
        component={FavoriteMoviesScreen}
      />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default FavoriteScreenNav;
