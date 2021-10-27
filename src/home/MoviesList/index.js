import { CircularProgress, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
// import { v4 as uuid } from "uuid";
import React from "react";
import { useQuery } from "react-query";

import MovieCard from "../../ds/MovieCard";
import { fetchMovies } from "../../dataProvider";

// const defaultMovies = new Array(20).fill(null).map(() => ({
//   id: uuid(),
//   title: "Titanic",
//   image: "https://api.lorem.space/image/movie?w=350&h=210",
// }));

export default function MoviesList() {
  const { data: movies, error, isLoading } = useQuery("movies", fetchMovies);

  if (isLoading) return <CircularProgress />;

  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Grid container spacing={2}>
      {movies.map(({ Title, imdbID, Poster }) => (
        <Grid item key={imdbID}>
          <MovieCard title={Title} id={imdbID} image={Poster} />
        </Grid>
      ))}
    </Grid>
  );
}
