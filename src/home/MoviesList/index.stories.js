import {
  BrowserRouterContext,
  QueryClientProviderContext,
} from "../../testHelpers";
import MoviesList from "./";

export default {
  component: MoviesList,
  title: "Home/MoviesList",
};

const Template = (args) => (
  <QueryClientProviderContext>
    <BrowserRouterContext>
      <MoviesList {...args} />
    </BrowserRouterContext>
  </QueryClientProviderContext>
);

export const Default = Template.bind({});
Default.args = {};

export const IsLoading = Template.bind({});
IsLoading.args = {};

export const HasError = Template.bind({});
HasError.args = {};
