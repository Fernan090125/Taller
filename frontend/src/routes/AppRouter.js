import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../helpers/routes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import useAuth from "../auth/useAuth";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Register from "../pages/Register/register";
import Dashboard from "../components/dashboard/dashboard";
import Nav from "../components/navbar/navbar";
export default function AppRouter() {
  const { isLogged } = useAuth();

  function dash() {
    if (isLogged()) {
      return (
        <>
          {" "}
          <Nav></Nav> <Dashboard />
        </>
      );
    }
  }

  

  return (
    <Router>
      {dash()}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PublicRoute exact path="/ingresar" component={Login}></PublicRoute>

        <PrivateRoute
          exact
          path="/register"
          component={Register}
        ></PrivateRoute>
      </Switch>
    </Router>
  );
}
