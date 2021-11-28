import "./dashboard.css";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu" style={{ paddingTop: "10px" }}>
          <Link to="/home" className="link" style={{ textDecoration: "none" }}>
            <li className="sidebarListItem " id="inicio">
              <i className="icon-inicio"></i> &nbsp; Inicio
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
                <i className="icon-verEmpleados"></i> &nbsp; Ver Empleados
              </li>
            </Link>

            <Link
              to="/addEmployees"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem" id="aEmpleados">
                <i className="icon-agregarEmpleado"></i> &nbsp;Agregar Empleados
              </li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Productos</h3>
          <ul className="sidebarList">
            <Link
              to="/products"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem " id="VerProducto">
                {" "}
                <i className="icon-verProductos"></i> &nbsp; Ver Productos
              </li>
            </Link>

            <Link
              to="/addProduct"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem" id="AddProducto">
                <i className="icon-ProductIco"></i> &nbsp; Agregar Productos
              </li>
            </Link>
          </ul>
          <h3 className="sidebarTitle">Ventas</h3>
          <ul className="sidebarList">
            <Link
              to="/seeSales"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem " id="sSales">
                <i className="icon-verVentas"></i> &nbsp;Ver Ventas
              </li>
            </Link>

            <Link
              to="/doSale"
              className="link"
              style={{ textDecoration: "none" }}
            >
              <li className="sidebarListItem" id="dSales">
                <i className="icon-SaleIco"></i> &nbsp;Realizar Venta
              </li>
            </Link>

            
          </ul>

          <button
              className="link"
              style={{ textDecoration: "none" , border:"none" , backgroundColor:"transparent" ,  padding:0}}
              onClick={(e) => logout()}
            >
              <li className="sidebarListItem" id="dSales">
                <i className="icon-SaleIco"></i> &nbsp;salaverga de aqui
              </li>
            </button>
        </div>
      </div>
    </div>
  );
}
  