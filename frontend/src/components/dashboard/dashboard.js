import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <Link to="/" className="link" style={{ textDecoration: "none" }}>
            <li className="sidebarListItem " id="inicio">
              Inicio
            </li>
          </Link>
          &nbsp;
          <h3 className="sidebarTitle">Empleados</h3>
          <ul className="sidebarList">
            <Link
              to="/employees"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem " id="vEmpleados">
                Ver Empleados
              </li>
            </Link>

            <Link
              to="/addEmployees"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem" id="aEmpleados">
                Agregar Empleados
              </li>
            </Link>

            <Link
              to="/editEmployees"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem" id="eEmployees">
                Editar Empleados
              </li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Productos</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem " id="VerProducto" >Ver Productos</li>
            </Link>

            <Link to="/addProduct" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Agregar Productos</li>
            </Link>

            <Link to="/editProduct" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Editar Productos</li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Ventas</h3>
          <ul className="sidebarList">
            <Link to="/seeSales" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem " id = "sSales">Ver Ventas</li>
            </Link>

            <Link to="/doSale" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem" id ="dSales">Realizar Venta</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
