import { BrowserRouterContext } from "../../testHelpers";
import MovieCard from ".";

export default {
  component: MovieCard,
  title: "Design System/Molecule/MovieCard",
};

const Template = (args) => (
  <BrowserRouterContext>
    <MovieCard {...args} />
  </BrowserRouterContext>
);

export const Default = Template.bind({});
Default.args = { title: "Titanic", id: "12" };

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  image: "https://api.lorem.space/image/movie?w=350&h=210",
};
