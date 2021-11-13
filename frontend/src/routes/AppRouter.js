import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import useAuth from "../auth/useAuth";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/Register/register";
import dashboard from "../components/dashboard/dashboard";

export default function AppRouter() {
  const {islogged}=useAuth();
  function dash(){
      if (islogged()){
          return <dashboard/>
      }
  }
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <PublicRoute exact path="/login" component={Login}></PublicRoute>
      <PrivateRoute exact path="/register" component={Register}></PrivateRoute>
      </Switch>
    </Router>
  );
}
