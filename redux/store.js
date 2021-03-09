import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import moviesReducer from "./moviesReducer";

const persistConfig = {
  key: "movies",
  storage: AsyncStorage,
  favorites: ["favorites"],
};

const rootReducer = combineReducers({
  movieReducer: persistReducer(persistConfig, moviesReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const appPersist = persistStore(store);

export { store, appPersist };
