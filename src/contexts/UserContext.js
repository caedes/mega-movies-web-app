import { node } from "prop-types";
import React from "react";

const UserContext = React.createContext();

function useContext() {
  return React.useContext(UserContext);
}

const Provider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const value = React.useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

Provider.propTypes = {
  children: node,
};

const CustomUserContext = {
  Provider,
  useContext,
};

export default CustomUserContext;
