import { useQuery } from "react-query";

import { fetchMovies } from "../dataProvider";

export default function useMovies(searchTerm = "2000") {
  const response = useQuery(["movies", { searchTerm }], () =>
    fetchMovies(searchTerm)
  );

  return { ...response, movies: response.data };
}
