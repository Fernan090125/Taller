import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";

export default function VerVentas() {
  const [ventas, setVentas] = useState([]);
  const history =  useHistory()
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
      getVentas();
    }

    document.getElementById("sSales").classList.add("active");
  }, []);

  function VerVenta(id) {
    history.push(`/Infoventa/${id}`);
  }

  async function getVentas() {
    const response = await axios.get("/api/sales/");
    console.log(response.data);
    setVentas(response.data.reverse());
  }

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
            <th>ID</th>
            <th>Cliente</th>
            <th>Empleado</th>
            <th>Total Venta</th>
            <th>Fecha</th>
            <th style={{textAlign:"center"}}>Info</th>
          </tr>
        </thead>
        {ventas.map((venta) => (
          <tbody>
            <tr>
              <td>{venta.id}</td>
              <td>{venta.infocliente.customer}</td>
              <td>{venta.employee}</td>
              <td>{venta.total}</td>
              <td>{venta.date}</td>
              <td style={{ backgroundColor: "", display: "flex" }}>
                <button
                  id={venta._id}
                  style={{ margin: "0 auto" }}
                  onClick={(e) => VerVenta(venta._id)}
                >
                  {" "}
                  <i className="icon-info"></i>{" "}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
