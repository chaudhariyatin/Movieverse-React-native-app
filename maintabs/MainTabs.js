import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import MovieScreenNav from "../navigation/screenNavigations/MovieScreenNav";
import TvShowsScreenNav from "../navigation/screenNavigations/TvShowsScreenNav";
import SearchScreenNav from "../navigation/screenNavigations/SearchScreenNav";
import FavoriteScreenNav from "../navigation/screenNavigations/FavoriteScreenNav";

import { KeyboardAvoidingView, Keyboard, Platform } from "react-native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Movie"
        tabBarOptions={{
          activeTintColor: "#0693E3",
          inactiveTintColor: "black",
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          name="Movie"
          component={MovieScreenNav}
          options={{
            tabBarLabel: "Movie",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-movies" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TV"
          options={{
            tabBarLabel: "Tv Shows",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="tv" size={24} color={color} />
            ),
          }}
          component={TvShowsScreenNav}
        />
        <Tab.Screen
          name="Search"
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-search-sharp" size={24} color={color} />
            ),
          }}
          component={SearchScreenNav}
        />
        <Tab.Screen
          name="Favorite"
          options={{
            activeTintColor: "#0693E3",
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite-border" size={24} color={color} />
            ),
          }}
          component={FavoriteScreenNav}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabs;
