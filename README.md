# Movieverse React Native App

Movieverse app made with React-Native, Redux, Async storage and React native Elements.

###### Video

![movieverse](/assets/movieverse.gif)

###### How it works

- When user opens the app, user is served with top rated movies and now playing movies (currently in theaters). Also we have Tv shows tab where top rated shows and airing today shows.
- User can add and remove favorite movies & shows from respectie tabs.
- By pressing on cards from carousel user can get detailed info about that movie or Tv show. Add & remove from favorite feature is provided in details screen.
- From search tab user can search movies and tv shows by simply searching title of movie.
- Favorite screen shows favorite movies & tv shows added by user. User can remove movie & tv shows from favorites.

## Getting Started with this app

This project was built Expo CLI.

### Installing Expo CLI

Install expo CLI globally

#### `npm install --global expo-cli`

### Installing packages

After cloning this git repo in the project directory, you can run:

#### `npm install`

### Run project Expo CLI

In the project directory, you can run:

#### `npm start`

or

#### `expo start`

For this you need to have [android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN&gl=US) phone or [ios](https://apps.apple.com/us/app/expo-go/id982107779) phone install with EXPO Go app.
Scan QR code with this app from browser and your done .

### Build App

Take look on expo docs [here](https://docs.expo.io/distribution/building-standalone-apps/)

#### `expo build:android` or `expo build:ios`

## React Native Official Docs

Follow documentation [here](https://reactnative.dev/docs/getting-started)

## React Native Navigation

### Installing React navigation

#### `npm install @react-navigation/native`

and required dependencies

#### `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

Here we have used Bottom Tab and stack navigation Navigator from this library.

#### `npm install @react-navigation/stack`

For more info [here](npm install @react-navigation/stack)

#### `npm install @react-navigation/bottom-tabs`

For more info [here](https://reactnavigation.org/docs/bottom-tab-navigator/)

## Redux docs

Follow documentation from [here](https://redux.js.org/api/api-reference)

## Async Storage

Follow documentation from [here](https://www.npmjs.com/package/@react-native-community/async-storage)

## Redux persist

Follow documentation from [here](https://www.npmjs.com/package/redux-persist)
