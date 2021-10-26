import { node } from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, ListOutlined, SearchOutlined } from "@material-ui/icons";

import MenuItem from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mega Movies</Typography>
          <MenuItem startIcon={<HomeOutlined />}>Accueil</MenuItem>
          <MenuItem startIcon={<SearchOutlined />}>Recherche</MenuItem>
          <MenuItem startIcon={<ListOutlined />}>Ma liste</MenuItem>
          <Separator />
          <MenuItem>Login</MenuItem>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.propTypes = {
  children: node,
};
