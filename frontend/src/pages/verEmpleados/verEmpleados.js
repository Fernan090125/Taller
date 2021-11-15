import "./verEmpleados.css";
import { useEffect } from "react";
import useAuth from "../../auth/useAuth";

export default function VerEmpleados() {
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    document.getElementById("inicio").classList.add("active");
  }, []);
  return <div className="home">sta es la pestaña ver empleados</div>;
}
