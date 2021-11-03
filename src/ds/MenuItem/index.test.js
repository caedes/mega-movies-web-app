import { screen, fireEvent } from "@testing-library/react";
import { HomeOutlined } from "@material-ui/icons";

import { pageContent, renderWithRouter } from "../../testHelpers";
import MenuItem from "./";

describe("MenuItem", () => {
  it("renders the button with a label", () => {
    renderWithRouter(<MenuItem to="/">Menu 1</MenuItem>);

    expect(screen.getByRole("button", { name: "Menu 1" })).toBeInTheDocument();
  });

  it("renders the start icon", () => {
    renderWithRouter(
      <MenuItem to="/" startIcon={<HomeOutlined data-testid="home-outlined" />}>
        Menu 1
      </MenuItem>
    );

    expect(screen.getByTestId("home-outlined")).toBeInTheDocument();
  });

  it("changes route accordingly", () => {
    renderWithRouter(<MenuItem to="/test">Menu 1</MenuItem>, {
      routes: ["/test"],
    });

    const button = screen.getByRole("button", { name: "Menu 1" });

    fireEvent.click(button);

    expect(screen.getByText(pageContent("/test"))).toBeInTheDocument();
  });
});
