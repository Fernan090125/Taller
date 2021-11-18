import "./verEmpleados.css";
import { useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function VerEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    async function getEmpleados() {
      const { data } = await axios.get("/api/users/");

      await setEmpleados(data);
    }
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    document.getElementById("vEmpleados").classList.add("active");
    getEmpleados();
  }, []);

  useEffect(() => {
    console.log(empleados);
  }, [empleados]);

  return (
    <div className="home" style={{ backgroundColor: "", padding: "20px" }}>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{
          width: "100%",
          borderColor: "black",
        }}
      >
        <thead>
          <tr>
            <th>Nombre</th>

            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        {empleados.map((empleado) => (
          <>
            <tbody>
              <tr>
                <td>{empleado.name}</td>
                <td>{empleado.email}</td>
                <td>{empleado.rol}</td>
                <td style={{ backgroundColor: "", display: "flex" }}>
                  <button style={{ margin: "0 auto" }}>
                    {" "}
                    <i className="icon-editar"></i>{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </Table>
    </div>
  );
}
