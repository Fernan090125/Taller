import "./agregarProductos.css";
import { useEffect } from "react";

export default function AgregarProductos() {
  useEffect(() => {
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
      document.getElementById("AddProducto").classList.add("active");
  }, []);
  return <div className="home">Esta es la pestaña agregar Productos</div>;
}