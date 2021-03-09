export const addToFavouritesHandler = (movie, addToFavorites) => {
  addToFavorites(movie);
};

export const removeFromFavouritesHandler = (movie, removeFromFavorites) => {
  removeFromFavorites(movie);
};

export const isExist = (movie, favoriteMovies) => {
  if (favoriteMovies.filter((item) => item.id === movie.id).length > 0) {
    return true;
  }
  return false;
};

export const upperCaseFirstletter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
