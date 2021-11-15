import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <Link
            to="/"
            className="link"
            style={{ textDecoration: "none" }}
            
          >
            <li className="sidebarListItem " id="inicio">Inicio</li>
          </Link>
          &nbsp;
          <h3 className="sidebarTitle">Empleados</h3>
          <ul className="sidebarList">
            <Link to="/employees" className="link" id = "vEmpleados" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem ">Ver Empleados</li>
            </Link>

            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Agregar Empleados</li>
            </Link>

            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Editar Empleados</li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Productos</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem ">Ver Productos</li>
            </Link>

            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Agregar Productos</li>
            </Link>

            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Editar Productos</li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Ventas</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem ">Ver Ventas</li>
            </Link>

            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Realizar Venta</li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Ventas</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem ">Ver Ventas</li>
            </Link>

            <Link to="/" className="link" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">Realizar Venta</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
