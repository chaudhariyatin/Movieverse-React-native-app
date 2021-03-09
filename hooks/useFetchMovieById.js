import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function useFetchMovieById(id) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}&language=en-US&page=1`;

    axios
      .get(baseUrl)
      .then((res) => setMovieData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return movieData;
}
