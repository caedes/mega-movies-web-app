import { AppBar, Toolbar } from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";

import MenuItem, { variants } from "./";

export default {
  component: MenuItem,
  title: "Design System/Molecule/MenuItem",
  decorators: [
    (Story) => (
      <AppBar position="static">
        <Toolbar>
          <Story />
        </Toolbar>
      </AppBar>
    ),
  ],
};

export const Default = () => <MenuItem to="/">Menu 1</MenuItem>;

export const WithIcon = () => (
  <MenuItem to="/" startIcon={<HomeOutlined />}>
    Menu 1
  </MenuItem>
);

export const WithCurrentVariant = () => (
  <MenuItem to="/" startIcon={<HomeOutlined />} variant={variants.current}>
    Menu 1
  </MenuItem>
);
