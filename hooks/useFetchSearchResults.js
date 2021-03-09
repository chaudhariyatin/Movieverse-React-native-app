import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function useFetchSearchResults(query) {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    if (query) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
      axios
        .get(url)
        .then((res) => {
          setMovieData(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [query]);

  return movieData;
}
