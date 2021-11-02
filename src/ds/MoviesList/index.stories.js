import { BrowserRouterContext } from "../../testHelpers";
import MoviesList from ".";

export default {
  component: MoviesList,
  title: "Design System/Organism/MoviesList",
};

const Template = (args) => (
  <BrowserRouterContext>
    <MoviesList {...args} />
  </BrowserRouterContext>
);

export const Default = Template.bind({});
Default.args = {
  movies: [
    { Title: "Titanic", imdbID: "12" },
    { Title: "Titanic 2", imdbID: "13" },
    { Title: "Titanic 3", imdbID: "14" },
  ],
};

export const HasEmptyMovies = Template.bind({});
HasEmptyMovies.args = { movies: [] };
