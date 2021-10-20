import { node } from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuItem from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mega Movies</Typography>
          <MenuItem>Accueil</MenuItem>
          <MenuItem>Recherche</MenuItem>
          <MenuItem>Ma liste</MenuItem>
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
