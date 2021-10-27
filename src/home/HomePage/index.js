import { Grid } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import React from "react";

import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";

const defaultMovies = new Array(20).fill(null).map(() => ({
  id: uuid(),
  title: "Titanic",
  image: "https://api.lorem.space/image/movie?w=350&h=210",
}));

export default function HomePage() {
  const [movies] = React.useState(defaultMovies);

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
    </BaseLayout>
  );
}
