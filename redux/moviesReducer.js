import { Action } from "./action";

const initialState = {
  topRatedMovies: [],
  nowPlayingMovies: [],
  topRatedShows: [],
  airingToday: [],
  favoriteMovies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Action.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case Action.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    case Action.GET_TOP_SHOWS:
      return {
        ...state,
        topRatedShows: action.payload,
      };
    case Action.GET_ATRING_TODAY_SHOWS:
      return {
        ...state,
        airingToday: action.payload,
      };
    case Action.GET_MOVIE_BY_ID:
      return {
        ...state,
        movieData: action.payload,
      };
    case Action.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case Action.REMOVE_FROM_FAVORITES_LIST:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
