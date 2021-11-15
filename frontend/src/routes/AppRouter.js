import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../helpers/routes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import useAuth from "../auth/useAuth";
import Login from "../pages/login/login";
<<<<<<< Updated upstream
import Home from "../pages/home/home.jsx";
import Register from "../pages/Register/register";
import Dashboard from "../components/dashboard/dashboard";
import Nav from "../components/navbar/navbar";
import AuthProvider from "../auth/AuthProvider";
import VerEmpleados from "../pages/verEmpleados/verEmpleados";
=======
import Home from "../pages/home/home";
import Register from "../pages/Register/register";
import Dashboard from "../components/dashboard/dashboard";
import Nav from "../components/navbar/navbar";
>>>>>>> Stashed changes
export default function AppRouter() {
  const { isLogged } = useAuth();

  function dash() {
    if (isLogged()) {
      return (
        <>
<<<<<<< Updated upstream
          <Dashboard />
=======
          {" "}
          <Nav></Nav> <Dashboard />
>>>>>>> Stashed changes
        </>
      );
    }
  }

<<<<<<< Updated upstream
  function Navbar() {
    if (isLogged()) {
      return <Nav></Nav>;
    }
  }

  return (
    <Router>
      {Navbar()}
      <div className="cont">
        {dash()}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>

          <PrivateRoute path="/employees">
            <VerEmpleados />
          </PrivateRoute>
        </Switch>
      </div>
=======
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
>>>>>>> Stashed changes
    </Router>
  );
}