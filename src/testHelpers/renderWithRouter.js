import { render } from "@testing-library/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const defaultRoutes = ["/"];
const defaultInitialRoute = "/";

export default function renderWithRouter(
  ui,
  options = { routes: defaultRoutes, initialRoute: defaultInitialRoute }
) {
  const { routes, initialRoute = defaultInitialRoute } = options;

  const routesToRender = [...defaultRoutes, ...routes];

  const CustomBrowserRouter = () => (
    <BrowserRouter>
      {ui}
      <Switch>
        {routesToRender.map((path) => (
          <Route exact path={path} key={path}>
            {pageContent(path)}
          </Route>
        ))}
      </Switch>
      <Redirect exact from={defaultInitialRoute} to={initialRoute} />
    </BrowserRouter>
  );

  render(ui, { wrapper: CustomBrowserRouter });
}

export function pageContent(path) {
  return `${path} Page Content`;
}
