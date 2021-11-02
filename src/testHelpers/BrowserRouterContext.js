import { BrowserRouter } from "react-router-dom";

export default function BrowserRouterContext({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
