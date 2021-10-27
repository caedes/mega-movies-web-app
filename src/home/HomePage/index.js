import { Alert } from "@material-ui/lab";
import { Grid } from "@material-ui/core";
import React from "react";

import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";
import { useMovies } from "../../hooks";

export default function HomePage() {
  const { movies, hasMovies } = useMovies();

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        {hasMovies ? (
          movies.map((movie) => (
            <Grid item key={movie.id}>
              <MovieCard {...movie} />
            </Grid>
          ))
        ) : (
          <Alert severity="info">Aucun film trouvé</Alert>
        )}
      </Grid>
    </BaseLayout>
  );
}
