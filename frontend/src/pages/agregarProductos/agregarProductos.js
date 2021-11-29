import "./agregarProductos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

export default function AgregarProductos() {
  const [file, setFile] = useState();
  const [fileUrl, setfileUrl] = useState(null);
  var numeros = "0123456789";
  const [alertaNombreN, setalertaNombreN] = useState(false);

  const [AlertaPrecio, setAlertaPrecio] = useState(false);

  const [alertaDetalles, setAlertaDetalles] = useState(false);

  const [alertaStock, setAlertaStock] = useState(false);

  const [problemas, setProblemas] = useState(true);

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

    setfileUrl(null);
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

  async function addProduct(e) {
    e.preventDefault();

    if (/\d/.test(document.getElementById("name").value)) {
      setalertaNombreN(true);
    } else {
      setalertaNombreN(false);
    }

    if (isNaN(document.getElementById("price").value)) {
      setAlertaPrecio(true);
    } else {
      setAlertaPrecio(false);
    }

    if (/\d/.test(document.getElementById("detalles").value)) {
      setAlertaDetalles(true);
    } else {
      setAlertaDetalles(false);
    }

    if (isNaN(document.getElementById("stock").value)) {
      setAlertaStock(true);
    } else {
      setAlertaStock(false);
    }


    if (
      /\d/.test(document.getElementById("name").value) == true||
      isNaN(document.getElementById("price").value) == true ||
      /\d/.test(document.getElementById("detalles").value) == true ||
      isNaN(document.getElementById("stock").value) == true
    ) {
      setProblemas(false);
      alert("Por favor, revise los campos");
    }

    if (problemas == false) {
      const { data } = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        description: document.getElementById("detalles").value,
        image: document.getElementById("img").value,
        stock: document.getElementById("stock").value,
        model: document.getElementById("model").value,
      };
      console.log(data);
    }
  }


  function alertaLetras() {
    return (
      <h4 className="alert" id="alert1">
        Este campo no puede contener letras
      </h4>
    );
  }

  function alertaCaracteres() {
    return (
      <h4 className="alert" id="alert1">
        este campo no puede contener caracteres especiales
      </h4>
    );
  }

  function alertaVacio() {
    return (
      <h4 className="alert" id="alert1">
        este campo no puede estar vacio
      </h4>
    );
  }

  function alertaNombre() {
    if (alertaNombreN === true) {
      return (
        <h4 className="alert" id="alert1">
          Este campo no puede contener numeros
        </h4>
      );
    } else {
      return null;
    }
  }

  function alertaStockP() {
    if (alertaStock === true || AlertaPrecio === true) {
      return (
        <h4 className="alert" id="alert1">
          Este campo solo puede contener numeros
        </h4>
      );
    } else {
      return null;
    }
  }


  function onChangeName(e) {
    const name = e.target.value;
    if (name.length > 10) {
      document.getElementById("alert1").style.display = "block";
    } else {
      document.getElementById("alert1").style.display = "none";
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
                      {alertaNombre()}
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
                      {}
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
