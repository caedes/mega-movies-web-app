import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

import { useMovies } from "../../hooks";
import BaseLayout from "../../ds/BaseLayout";
import SearchInput from "../../ds/SearchInput";
import MoviesList from "../../ds/MoviesList";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { movies, isLoading, error } = useMovies(searchTerm);

  return (
    <BaseLayout>
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
      <MoviesList movies={movies} />
    </BaseLayout>
  );
}
