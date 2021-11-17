import "./verProductos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import axios from "axios";

export default function VerProductos() {

  const [productos, setProductos] = useState([]);
  
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

  return (
    <div className="home">
      <Table striped bordered hover size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Editar</th>
            </tr>
          </thead>
        {productos.map((productos) => (
        <>
          <tbody>
            <tr>
              <td>{productos._id}</td>
              <td> <Link to="/editProduct">  a </Link>  </td>
            </tr>
          </tbody>
        </>
      ))}
    </Table>
    </div>
  );
}