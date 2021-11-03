import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, ListOutlined, SearchOutlined } from "@material-ui/icons";
import { node } from "prop-types";
import React from "react";

import { homePath, myListPath, searchPath } from "../../routes";
import MenuItem, { useVariantLocation } from "../MenuItem";
import Separator from "../Separator";
import { UserContext } from "../../contexts";
import { fetchUser } from "../../dataProvider";

export default function BaseLayout({ children }) {
  const { variantPath } = useVariantLocation();
  const { user, setUser } = UserContext.useContext();

  const logout = () => setUser(null);

  const login = async () => {
    const user = await fetchUser();
    setUser(user);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mega Movies</Typography>
          <MenuItem
            startIcon={<HomeOutlined />}
            to={homePath}
            variant={variantPath(homePath)}
          >
            Accueil
          </MenuItem>
          <MenuItem
            startIcon={<SearchOutlined />}
            to={searchPath}
            variant={variantPath(searchPath)}
          >
            Recherche
          </MenuItem>
          <MenuItem
            startIcon={<ListOutlined />}
            to={myListPath}
            variant={variantPath(myListPath)}
          >
            Ma liste
          </MenuItem>
          <Separator />
          {user ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.propTypes = {
  children: node,
};
