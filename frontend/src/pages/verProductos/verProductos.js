import "./verProductos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";

export default function VerProductos() {
  useEffect(() => {
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
      document.getElementById("VerProducto").classList.add("active");
  }, []);

  return <div className="home">Esta es la pestaña ver Productos</div>;
}