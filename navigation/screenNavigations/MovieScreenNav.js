import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesScreen from "../../screens/MoviesScreen";
import MovieDetails from "../../screens/MovieDetails";

const MovieScreenNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        options={{ headerShown: false }}
        component={MoviesScreen}
      />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default MovieScreenNav;
