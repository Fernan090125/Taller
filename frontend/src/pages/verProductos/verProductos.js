import "./verProductos.css";
import { useEffect, useState } from "react";
import { Link , useHistory} from "react-router-dom";
import { Table } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import axios from "axios";

export default function VerProductos() {

  const [productos, setProductos] = useState([]);
  const history = useHistory();

  
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("/api/products/");
      await setProductos(data);
    }
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
      document.getElementById("VerProducto").classList.add("active");
      getProducts();
  }, []);

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  function editarProducto(id) {
    console.log(id);
    history.push(`/editProduct/${id}`);
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
            <th>Nombre</th>
            <th>price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        {productos.map((producto) => (
          <>
            <tbody>
              <tr>
                <td>{producto.name}</td>
                <td>{producto.price}</td>
                <td>{producto.stock}</td>
                <td style={{ backgroundColor: "", display: "flex" }}>
                  <button
                    id={producto._id}
                    style={{ margin: "0 auto" }}
                    onClick={(e) => editarProducto(producto._id)}
                  >
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