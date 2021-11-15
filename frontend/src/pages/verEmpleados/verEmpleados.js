import "./verEmpleados.css";
import { useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function VerEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  async function getEmpleados() {
    const { data } = await axios.get("http://localhost:4000/api/users/");
    setEmpleados(data);
  }

  useEffect(() => {
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
    <div className="home">
      <h1>hoooooo</h1>
    </div>
  );
}
