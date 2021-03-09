import axios from "axios";
import config from "../config";
// action types
export const Action = {
  GET_TOP_RATED_MOVIES: "GET_TOP_RATED_MOVIES",
  GET_NOW_PLAYING_MOVIES: "GET_NOW_PLAYING_MOVIES",
  GET_TOP_SHOWS: "GET_TOP_SHOWS",
  GET_ATRING_TODAY_SHOWS: "GET_ATRING_TODAY_SHOWS",
  GET_MOVIE_BY_ID: "GET_MOVIE_BY_ID",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES_LIST: "REMOVE_FROM_FAVORITES_LIST",
  ON_ERROR: "ON_ERROR",
};

// ---->ACTIONS
export const fetchMovies = (category, type) => {
  const BASE_URL = `https://api.themoviedb.org/3/${type}/${category}?api_key=${config.API_KEY}&language=en-US&page=1`;
  try {
    return async (dispatch) => {
      const response = await axios.get(BASE_URL);

      if (type === "movie") {
        if (response.data && category === "top_rated" && type === "movie") {
          dispatch({
            type: Action.GET_TOP_RATED_MOVIES,
            payload: response.data.results,
          });
        } else if (
          response.data &&
          category === "now_playing" &&
          type === "movie"
        ) {
          dispatch({
            type: Action.GET_NOW_PLAYING_MOVIES,
            payload: response.data.results,
          });
        } else {
          //throw error
          dispatch({
            type: Action.ON_ERROR,
            payload: "Unable to fetch movies",
          });
        }
      } else if (type === "tv") {
        if (response.data && category === "popular" && type === "tv") {
          dispatch({
            type: Action.GET_TOP_SHOWS,
            payload: response.data.results,
          });
        } else if (
          response.data &&
          category === "airing_today" &&
          type === "tv"
        ) {
          dispatch({
            type: Action.GET_ATRING_TODAY_SHOWS,
            payload: response.data.results,
          });
        } else {
          //throw error
          dispatch({
            type: Action.ON_ERROR,
            payload: "Unable to fetch movies",
          });
        }
      }
    };
  } catch (err) {
    //throw error
    dispatch({
      type: Action.ON_ERROR,
      payload: "Unable to fetch movies",
    });
  }
};

export const addToFavorites = (movie) => (dispatch) => {
  dispatch({
    type: Action.ADD_TO_FAVORITES,
    payload: movie,
  });
};

export const removeFromFavorites = (movie) => (dispatch) => {
  dispatch({
    type: Action.REMOVE_FROM_FAVORITES_LIST,
    payload: movie,
  });
};
