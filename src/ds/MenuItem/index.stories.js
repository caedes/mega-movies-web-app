import { AppBar, Toolbar } from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";
import { BrowserRouterContext } from "../../testHelpers";

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

const Template = ({ children, ...props }) => (
  <BrowserRouterContext>
    <MenuItem {...props}>{children}</MenuItem>
  </BrowserRouterContext>
);

export const Default = Template.bind({});
Default.args = { to: "/", children: "Menu 1" };

export const WithIcon = Template.bind({});
WithIcon.args = { ...Default.args, startIcon: <HomeOutlined /> };

export const WithCurrentVariant = Template.bind({});
WithCurrentVariant.args = { ...WithIcon.args, variant: variants.current };
