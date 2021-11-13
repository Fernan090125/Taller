import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import useAuth from "../auth/useAuth";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/Register/register";
import Dashboard from "../components/dashboard/dashboard";
import Nav from "../components/navbar/navbar";

export default function AppRouter() {
  const { isLogged } = useAuth();
  function dash() {
    if (isLogged()) {
      return (
        <>
          <Nav />
          <Dashboard />
        </>
      );
    }
  }
  return (
    <Router>
      <Switch>
        {dash()}

        <Route exact path="/" component={Home}></Route>
        <PublicRoute exact path="/login" component={Login}></PublicRoute>
        <PrivateRoute
          exact
          path="/register"
          component={Register}
        ></PrivateRoute>
      </Switch>
    </Router>
  );
}
