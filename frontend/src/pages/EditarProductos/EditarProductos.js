import "./EditarProductos.css";
import { useEffect, useState } from "react";

import { useHistory } from "react-router";
import axios from "axios";

import { Form } from "react-bootstrap";

export default function EditProductos() {

  const history = useHistory();
  const [producto, setProducto] = useState();

  const [file, setFile] = useState();
  const [fileUrl, setfileUrl] = useState(null);
  useEffect(() => {
    const id = window.location.pathname.split("/")[2];

    async function getProductInfo() {
      const response = await axios.post("/api/products/getproduct2",{id});

      console.log(response.data.product);

      setProducto(response.data.product);
    }

    getProductInfo();
  }, []);

  useEffect(() => {
    if (producto) {
      document.getElementById("nombre").value = producto.name;
      document.getElementById("descripcion").value = producto.description;
      document.getElementById("precio").value = producto.price;
      document.getElementById("cantidad").value = producto.stock;
      document.getElementById("model").value = producto.model;
      document.getElementById("category").value = producto.category;

      setfileUrl(producto.image);
    }
  }, [producto]);

  async function EditProduct(e) {
    e.preventDefault();
    const id = window.location.pathname.split("/")[2];
    const { data } = await axios.put("/api/products/" + id, {
      name: document.getElementById("nombre").value,
      price: document.getElementById("precio").value,
      category: document.getElementById("category").value,
      description: document.getElementById("descripcion").value,
      stock: document.getElementById("cantidad").value,
      model: document.getElementById("model").value,
      image: fileUrl,
    });
    console.log(data);

    history.push("/products");
    
  }

  function onChangefile(e) {
    setFile(e.target.files[0]);
    const imgfile = URL.createObjectURL(e.target.files[0]);
    setfileUrl(imgfile);
  }

  function img() {
    if (fileUrl !== null) {
      return <img src={fileUrl} style={{ width: "200px" }} alt="img"></img>;
    }
  }
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Editar Producto</h4>
            </div>
            <div className="card-body">
              <form type="Submit" onSubmit={(e) => EditProduct(e)}>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        id="nombre"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Precio</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        id="precio"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Detalles</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                        id="descripcion"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Cantidad</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Correo"
                        id="cantidad"
                      />
                    </div>
                  </div>
                </div>
                <div className="row"></div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Modelo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cargo"
                        id="model"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Categoria</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cargo"
                        id="category"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Imagen</label>
                    <Form.Group controlId="formFile" className="mb-3">
                      <input type="file" onChange = {(e) => onChangefile(e)}/>
                    </Form.Group>
                    {img()}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-fill pull-right"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Editar
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
