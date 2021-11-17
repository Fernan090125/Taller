import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../helpers/routes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import useAuth from "../auth/useAuth";
import Login from "../pages/login/login";
import Home from "../pages/home/home.jsx";
import Register from "../pages/Register/register";
import Dashboard from "../components/dashboard/dashboard";
import Nav from "../components/navbar/navbar";
import AuthProvider from "../auth/AuthProvider";
import VerEmpleados from "../pages/verEmpleados/verEmpleados";
import AgregarEmpleado from "../pages/agregarEmpleados/agregarEmplado";
import EditarEmpleadosPage from "../pages/editarEmpleados/editarEmpleados";
import VerVentas from "../pages/verVentas/verVentas";
import RealizarVenta from "../pages/realizarVenta/realizarVenta";
import VerProductos from "../pages/verProductos/verProductos";
import AgregarProductos from "../pages/agregarProductos/agregarProductos.js";
import EditProductos from "../pages/EditarProductos/EditarProductos";

export default function AppRouter() {
  const { isLogged } = useAuth();

  function dash() {
    if (isLogged()) {
      return (
        <>
          <Dashboard />
        </>
      );
    }
  }

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
          <PublicRoute exact path="/">
            <Login />
          </PublicRoute>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>

          <PrivateRoute path="/employees">
            <VerEmpleados />
          </PrivateRoute>

          <PrivateRoute path="/addEmployees">
            <AgregarEmpleado />
          </PrivateRoute>

          <PrivateRoute path="/editEmployees">
            <EditarEmpleadosPage />
          </PrivateRoute>

          <PrivateRoute path="/editEmployees/:id">
            <EditarEmpleadosPage />
          </PrivateRoute>

          <PrivateRoute path="/seeSales">
            <VerVentas />
          </PrivateRoute>

          <PrivateRoute path="/doSale">
            <RealizarVenta />
          </PrivateRoute>
          <PrivateRoute path="/products">
            <VerProductos />
          </PrivateRoute>

          <PrivateRoute path="/addProduct">
            <AgregarProductos />
          </PrivateRoute>

          <PrivateRoute path="/editProduct">
            <EditProductos />
          </PrivateRoute>

          
        </Switch>
      </div>
    </Router>
  );
}
