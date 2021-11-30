import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl, FormGroup, Table, Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import axios from "axios";
import "./realizarVenta.css";
import useAuth from "../../auth/useAuth";

export default function RealizarVenta() {
  const { user } = useAuth();
  var numeros = "0123456789";
  const [productos, setproductos] = useState([]);
  const [rows, setrows] = useState([]);

  const [alertaNombreN, setalertaNombreN] = useState(false);

  const [alertaNombreT, setalertaNombreT] = useState(false);

  const [alertaCedulaT, setAlertaCedulaT] = useState(false);

  const [alertaCedulaL, setAlertaCedulaL] = useState(false);

  const [alertaTelefonoT, setAlertaTelefonoT] = useState(false);

  const [alertaTelefonoL, setAlertaTelefonoL] = useState(false);

  const [problemas, setProblemas] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function verifyNumber(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      if (numeros.indexOf(cadena.charAt(i), 0) == -1) {
        return false;
      }
    }
    return true;
  }
  useEffect(() => {
    document.title = "home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
      getProductbyCategori("Motor");
      getnventas();
    }
    document.getElementById("dSales").classList.add("active");
  }, []);

  async function getnventas() {
    const res = await axios.get("/api/sales");
    document.getElementById("facturaNumber").value =
      (await res.data.length) + 1;
    console.log(res.data.length);
  }

  function imprimirSeleccion(nombre) {
    window.print();
  }

  async function saveVenta(e) {
    e.preventDefault();

    if (/\d/.test(document.getElementById("cliente").value)) {
      setalertaNombreN(true);
    } else {
      setalertaNombreN(false);
    }

    if (document.getElementById("cedulaCli").value.length != 10) {
      setAlertaCedulaT(true);
    } else {
      setAlertaCedulaT(false);
    }

    if (isNaN(document.getElementById("cedulaCli").value)) {
      setAlertaCedulaL(true);
    } else {
      setAlertaCedulaL(false);
    }

    if (document.getElementById("TelefonoCli").value.length != 10) {
      setAlertaTelefonoT(true);
    } else {
      setAlertaCedulaT(false);
    }

    if (isNaN(document.getElementById("TelefonoCli").value)) {
      setAlertaTelefonoL(true);
    } else {
      setAlertaTelefonoL(false);
    }

    if (
      document.getElementById("cedulaCli").value.length != 10 ||
      /\d/.test(document.getElementById("cliente").value) == true ||
      isNaN(document.getElementById("cedulaCli").value) == true ||
      document.getElementById("TelefonoCli").value.length != 10 ||
      isNaN(document.getElementById("TelefonoCli").value) == true
    ) {
      setProblemas(true);
      alert("Revise los campos");
    }

    console.log(problemas);

    if (problemas == false) {
      let data = {
        employee: user.username,
        infocliente: {
          customer: document.getElementById("cliente").value,
          customerId: document.getElementById("cedulaCli").value,
          adress: document.getElementById("direccion").value,
          phone: document.getElementById("TelefonoCli").value,
        },
        products: [],
        total: 0,
        date: document.getElementById("date").value,
      };
      productos.map((producto) =>
        data.products.push({
          product: producto.name,
          quantity: producto.quantity,
          precioUnitario: producto.price,
          precioTotal: producto.total,
        })
      );
      productos.map(
        (producto) => (data.total += producto.quantity * producto.price)
      );

      const result = await axios.post("/api/sales/", data);
      alert("Venta realizada");
      console.log(result);

      imprimirSeleccion("factura");
    }
  }

  function setO(e) {
    getProductbyCategori(e.target.value);
  }
  async function getProductbyCategori(category) {
    const pbyc = await axios.post("/api/products/category", {
      category,
    });
    const d = pbyc.data;
    const pro = d.map((producto) => <option>{producto.name} </option>);
    if (pbyc.length > 0) {
      getMaxcant(d[0].name)  
    }
    
    ReactDOM.render(pro, document.getElementById("producto"));
  }

  function setCant(e) {
    getMaxcant(e.target.value);
  }
  async function getMaxcant(name) {
    const maxcant = await axios.post("/api/products/getproduct", {
      name
    });
    var cant=(maxcant.data.product.stock);
    //console.log("cant",cant);
    document.getElementById("cantidad").max = cant;
    document.getElementById("cantidad").value = 1;
    //console.log(document.getElementById("producto").value)
  }

  async function addRow(e) {
    //console.log(document.getElementById("producto").value)
    const name = document.getElementById("producto").value;
    const produc = await axios.post("/api/products/getproduct/",{name});
    console.log(produc);

    var row = {
      name: produc.data.product.name,
      quantity: document.getElementById("cantidad").value,
      price: produc.data.product.price,
      total: produc.data.product.price * document.getElementById("cantidad").value,
    };
    const auw = rows;
    auw.push(row);
    setrows(auw);
    console.log("rows", rows);
    productos.push(row);
    console.log("productos", productos);
    const filas = productos.map((producto) => (
      <tr>
        <td>{producto.quantity}</td>
        <td>{producto.name}</td>
        <td>{producto.price}</td>
        <td>{producto.total} </td>
      </tr>
    ));

    ReactDOM.render(filas, document.getElementById("filas"));
  }

  function alertaNumeros() {
    return (
      <h4 className="alert" id="alert1">
        Este campo no puede contener numeros
      </h4>
    );
  }

  function alertaLetras() {
    return (
      <h4 className="alert" id="alert1">
        Este campo no puede contener letras
      </h4>
    );
  }

  function alertaLongitud() {
    return (
      <h4 className="alert" id="alert1">
        este campo debe contener 10 caracteres
      </h4>
    );
  }

  function alertaNombre() {
    if (alertaNombreN === true) {
      return alertaNumeros();
    } else {
      return null;
    }
  }

  function alertaCedula() {
    if (alertaCedulaT === true && alertaCedulaL === true) {
      return alertaLetras();
    } else {
      if (alertaCedulaT === true) {
        return alertaLongitud();
      }
      if (alertaCedulaL === true) {
        return alertaLetras();
      } else {
        return null;
      }
    }
  }

  function alertaTelefono() {
    if (alertaTelefonoT === true && alertaTelefonoL === true) {
      return alertaLetras();
    } else {
      if (alertaTelefonoT === true) {
        return alertaLongitud();
      }
      if (alertaTelefonoL === true) {
        return alertaLetras();
      } else {
        return null;
      }
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
            <div className="card-header" id = "noPrint">
              <h4 className="card-title">Realizar Venta</h4>
            </div>
            <div className="card-body">
              <form type="Submit" onSubmit={saveVenta}>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group" id="Print">
                      <label>Fecha</label>
                      <FormGroup controlId="date" bsSize="large">
                        <FormControl type="date" required />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1" id = "Print">
                    <div className="form-group">
                      <label>Numero de Factura</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="1"
                        disabled
                        id="facturaNumber"
                      />
                    </div>
                  </div>
                </div>
                <div className="row" id="Print">
                  <div className="col-md-6 pr-1" id = "Print">
                    <div className="form-group">
                      <label>Nombre Cliente</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cliente"
                        required
                      ></input>
                      {alertaNombre()}
                    </div>
                  </div>
                  <div className="col-md-6 pl-1" id = "Print">
                    <div className="form-group">
                      <label>Cedula Cliente</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cedula cliente"
                        id="cedulaCli"
                        required
                      />
                      {alertaCedula()}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1" id = "Print">
                    <div className="form-group" style={{ margin: "0px" }}>
                      <label>Direccion</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion"
                        id="direccion"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1" id = "Print">
                    <div className="form-group">
                      <label>Telefono</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                        id="TelefonoCli"
                        required
                      />

                      {alertaTelefono()}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Form>
                    <div className="row">
                      <div className="col-md-2 pr-1" id = "Print">
                        <label>Categoria</label>
                        <Form.Select
                          aria-label="Default select example"
                          id="Categoria"
                          onChange={setO}
                        >
                          <option value="Motor">Motor</option>
                          <option value="Transmision">Transmision</option>
                          <option value="Direccion">Direccion</option>
                        </Form.Select>
                      </div>
                      <div className="col-md-2 pr-1" id = "noPrint">
                        <label>producto</label>
                        <Form.Select
                          aria-label="Default select example"
                          id="producto"
                          onChange={setCant}
                        ></Form.Select>
                      </div>
                      <div className="col-md-2 pr-1" id = "Print">
                        <label>Cantidad</label>
                        <input
                          type="number"
                          aria-label="Default select example"
                          id="cantidad"
                          className="form-control"
                          min="1"
                          defaultValue="1"
                        ></input>
                      </div>
                      <input
                        onClick={addRow}
                        className="col-md-1 pr-1"
                        type="button"
                        value="Agregar"
                        id = "noPrint"
                        style={{ marginTop: "auto", marginRight: "auto" }}
                      />
                    </div>
                  </Form>
                </div>
                <div className="row" id="print">
                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    style={{
                      width: "90%",
                      borderColor: "black",
                      marginTop: "10px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "10px",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          textAlign: "center",
                          borderBlockColor: "aquamarine",
                        }}
                      >
                        <th>Cantidad</th>
                        <th>producto</th>
                        <th>Precio unitario</th>
                        <th>Precio total</th>
                      </tr>
                    </thead>
                    <tbody id="filas"></tbody>
                  </Table>
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-fill pull-right"
                  style={{ marginTop: "10px", width: "100%" }}
                  id = "noPrint"
                >
                  Agregar
                </button>
                <div className="clearfix"></div>
              </form>
            </div>

            <Modal show={show} onHide={handleClose} animation={false} centered>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="modalbuttons"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  className="modalbuttons"
                  type="submit"
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      <div className="row" id="factura">
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{
            width: "90%",
            borderColor: "black",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "10px",
          }}
        >
          <thead>
            <tr
              style={{
                textAlign: "center",
                borderBlockColor: "aquamarine",
              }}
            >
              <th>Cantidad</th>
              <th>producto</th>
              <th>Precio unitario</th>
              <th>Precio total</th>
            </tr>
          </thead>
          <tbody id="filas"></tbody>
        </Table>
      </div>
    </div>
  );
}
