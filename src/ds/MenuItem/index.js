import { node } from "prop-types";
import { Button } from "@material-ui/core";

export default function MenuItem({ children }) {
  return <Button color="inherit">{children}</Button>;
}

MenuItem.propTypes = {
  children: node,
};
