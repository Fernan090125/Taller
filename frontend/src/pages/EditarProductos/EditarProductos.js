import "./EditarProductos.css";
import { useEffect } from "react";

export default function EditProductos() {
  useEffect(() => {
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
      document.getElementById("EditProducto").classList.add("active");
  }, []);
  return <div className="home">Esta es la pestaña Editar Productos</div>;
}