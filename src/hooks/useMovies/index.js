import React from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { fill } from "../../features/movies/moviesSlice";

const fetchMovies = async () =>
  new Array(20).fill(null).map(() => ({
    id: uuid(),
    title: "Titanic",
    image: "https://api.lorem.space/image/movie?w=350&h=210",
  }));

export default function useMovies() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const hasMovies = movies.length > 0;

  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies();
      dispatch(fill(movies));
    };

    fetchData();
  }, [dispatch]);

  return { movies, hasMovies };
}
