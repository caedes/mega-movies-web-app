import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

import { homePath, myListPath, searchPath } from "../routes";
import HomePage from "../home/HomePage";
import MyListPage from "../my-list/MyListPage";
import SearchPage from "../search/SearchPage";
import theme from "../ds/theme";
import { UserContext } from "../contexts";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <UserContext.Provider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
              <Route exact path={homePath}>
                <HomePage />
              </Route>
              <Route path={searchPath}>
                <SearchPage />
              </Route>
              <Route path={myListPath}>
                <MyListPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}
