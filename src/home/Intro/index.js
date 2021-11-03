import { Button, Typography } from "@material-ui/core";
import React from "react";

import { UserContext } from "../../contexts";
import { fetchUser } from "../../dataProvider";

export default function Intro() {
  const { user, setUser } = UserContext.useContext();

  const login = async () => {
    const user = await fetchUser();
    setUser(user);
  };

  return user ? (
    <Typography>
      Compte utilisateur : <strong>{user.firstName}</strong>
    </Typography>
  ) : (
    <>
      <Button onClick={login}>Authentifiez-vous</Button>
      <Typography>pour bénéficiez de fonctionnalités avancées.</Typography>
    </>
  );
}
