import { useEffect } from "react";

export default function EditarEmpleadosPage() {
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    document.getElementById("eEmployees").classList.add("active");
  }, []);
  return (
    <div className="home">
      <h1>esta es la pestaña de editar empleados</h1>
    </div>
  );
}
