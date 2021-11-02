import queryString from "query-string";

const API_URL = "//www.omdbapi.com";
const API_KEY = "f17611b7";

const resultToJson = (result) => result.json();

export default function fetchMovies(searchTerm) {
  const params = {
    apikey: API_KEY,
    page: 1,
    s: searchTerm,
  };

  return fetch(`${API_URL}/?${queryString.stringify(params)}`)
    .then(resultToJson)
    .then((data) => data.Search);
}
