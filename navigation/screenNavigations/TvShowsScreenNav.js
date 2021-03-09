import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "../../screens/MovieDetails";
import TvShowsScreen from "../../screens/TvShowsScreen";
// import TvShowsDetails from "../../screens/TvShowsDetails";

const TvShowsScreenNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TV"
        options={{ headerShown: false }}
        component={TvShowsScreen}
      />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default TvShowsScreenNav;
