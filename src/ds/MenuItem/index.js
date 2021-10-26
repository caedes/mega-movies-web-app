import { node } from "prop-types";
import { Button } from "@material-ui/core";

import useStyles from "./useStyles";

export default function MenuItem({ children, startIcon }) {
  const classes = useStyles();

  return (
    <Button
      color="inherit"
      classes={{ root: classes.root }}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
}

MenuItem.propTypes = {
  children: node,
  startIcon: node,
};
