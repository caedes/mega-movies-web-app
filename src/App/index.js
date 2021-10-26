import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import HomePage from "../home/HomePage";
import theme from "../ds/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}
