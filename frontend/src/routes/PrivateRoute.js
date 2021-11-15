import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

function PrivateRoute(props) {
  const { user, isLogged } = useAuth();

  if (!isLogged()) return <Redirect  to="/home" />;

  return <Route {...props} />;
}

export default PrivateRoute;
