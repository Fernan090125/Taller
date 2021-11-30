import "./agregarProductos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

export default function AgregarProductos() {
  const [file, setFile] = useState();
  const [fileUrl, setfileUrl] = useState(null);
  var numeros = "0123456789";

  const [AlertaPrecio, setAlertaPrecio] = useState(false);

  const [alertaStock, setAlertaStock] = useState(false);

  const [problemas, setProblemas] = useState(false);

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

  async function subir(e) {
    e.preventDefault();
    if (isNaN(document.getElementById("price").value)) {
      setAlertaPrecio(true);
    } else {
      setAlertaPrecio(false);
    }

    if (isNaN(document.getElementById("stock").value)) {
      setAlertaStock(true);
    } else {
      setAlertaStock(false);
    }

    if (
      isNaN(document.getElementById("price").value) == true ||
      isNaN(document.getElementById("stock").value) == true
    ) {
      setProblemas(false);
      console.log("problemas");
      alert("Por favor, revise los campos");
    }

    if (problemas == false) {
      const formData = new FormData();
      formData.append("image", file);
      console.log(file);
      formData.append("name", document.getElementById("name").value);
      formData.append("price", document.getElementById("price").value);
      formData.append("category", document.getElementById("category").value);
      formData.append("stock", document.getElementById("stock").value);
      formData.append("model", document.getElementById("model").value);
      formData.append("description", document.getElementById("detalles").value);

      await axios.post("/api/products", formData);
      alert("Producto agregado");
      window.location.reload();

      setfileUrl(null);
    }
  }

  useEffect(() => {
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
    document.getElementById("VerProducto").classList.add("active");
  }, []);

  function alertaStockP() {
    if (alertaStock === true){
      return (
        <h4 className="alert" id="alert1">
          Este campo solo puede contener numeros
        </h4>
      );
    }
    if(AlertaPrecio === true) {
      return (
        <h4 className="alert" id="alert2">
          Este campo solo puede contener numeros
        </h4>
      );
    }
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Agregar Producto</h4>
            </div>
            <div className="card-body">
              <form type="Submit" onSubmit={(e) => subir(e)}>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Nombre Marca</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Precio</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Precio"
                        id="price"
                        required
                      />
                      {alertaStockP()}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Categoria</label>
                      <Form.Select
                        aria-label="Default select example"
                        id="category"
                      >
                        <option value="Motor">Motor</option>
                        <option value="Transmision">Transmision</option>
                        <option value="Direccion">Direccion</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Detalles</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Detalles"
                        id="detalles"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Imagen</label>
                      <Form.Group controlId="formFile" className="mb-3">
                        <input type="file" onChange={(e) => onChangefile(e)} />
                      </Form.Group>
                      {img()}
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Cantidad</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cantidad"
                        id="stock"
                        required
                      />
                      {alertaStockP()}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Modelo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Modelo"
                        id="model"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-fill pull-right"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Agregar
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
