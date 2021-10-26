import { node, string } from "prop-types";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./useStyles";

export default function MenuItem({ children, startIcon, to }) {
  const classes = useStyles();

  return (
    <Button
      color="inherit"
      classes={{ root: classes.root }}
      startIcon={startIcon}
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
}

MenuItem.propTypes = {
  children: node,
  startIcon: node,
  to: string,
};
