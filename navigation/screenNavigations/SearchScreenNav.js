import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "../../screens/MovieDetails";
import SearchMoviesScreen from "../../screens/SearchMoviesScreen";

const SearchScreenNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        options={{ headerShown: false }}
        component={SearchMoviesScreen}
      />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default SearchScreenNav;
