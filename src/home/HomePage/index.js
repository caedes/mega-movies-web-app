import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

import BaseLayout from "../../ds/BaseLayout";
import MoviesList from "../../ds/MoviesList";
import { useMovies } from "../../hooks";

export default function HomePage() {
  const { movies, isLoading, error } = useMovies();

  return (
    <BaseLayout>
      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
      <MoviesList movies={movies} />
    </BaseLayout>
  );
}
