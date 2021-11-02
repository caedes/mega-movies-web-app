import { Grid, Typography } from "@material-ui/core";
import { arrayOf, shape, string } from "prop-types";

import MovieCard from "../MovieCard";

export default function MoviesList({ movies = [] }) {
  if (!movies || movies.length === 0)
    return <Typography>Il n'y a pas de films.</Typography>;

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

MoviesList.propTypes = {
  movies: arrayOf(
    shape({
      Title: string.isRequired,
      imdbID: string.isRequired,
      Poster: string,
    })
  ),
};
