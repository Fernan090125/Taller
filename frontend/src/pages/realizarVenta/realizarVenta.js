import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl, FormGroup, Table } from "react-bootstrap";
import ReactDOM from "react-dom";
import axios from "axios";
import "./realizarVenta.css";

export default function RealizarVenta() {
  const [productos, setproductos] = useState([]);
  const [rows, setrows] = useState([]);
  useEffect(() => {
    document.title = "home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
    document.getElementById("dSales").classList.add("active");
  }, []);

  async function getProductbyCategori(e) {
    const pbyc = await axios.post("/api/products/category", {
      category: e.target.value,
    });
    const pro=pbyc.data.map((producto)=>{
      <option>{producto.name} </option>
    })
    console.log(pro);
    ReactDOM.render(pro, document.getElementById("producto"));
  }

  async function addRow(e) {
    var row = {
      name: document.getElementById("producto").value,
      quantity: document.getElementById("cantidad").value,
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

        <td style={{ backgroundColor: "", display: "flex" }}>
          <button style={{ margin: "0 auto" }}>
            {" "}
            <i className="icon-editar"></i>{" "}
          </button>
        </td>
      </tr>
    ));

    ReactDOM.render(filas, document.getElementById("filas"));
  }

  useEffect(() => {
    console.log(productos);
  }, [productos]);
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Realizar Venta</h4>
            </div>
            <div className="card-body">
              <form type="Submit">
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Fecha</label>
                      <FormGroup controlId="date" bsSize="large">
                        <FormControl type="date" />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Numero de Factura</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="1"
                        disabled
                        id="price"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Nombre Cliente</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cliente"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Cedula Cliente</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cedula cliente"
                        id="cedulaCli"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Direccion</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Telefono</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                        id="TelefonoCli"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Form>
                    <div className="row">
                      <div className="col-md-2 pr-1">
                        <label>Categoria</label>
                        <Form.Select
                          aria-label="Default select example"
                          id="Categoria"
                          onChange={getProductbyCategori}
                        >
                          <option value="Motor">Motor</option>
                          <option value="Transmision">Transmision</option>
                          <option value="Direccion">Direccion</option>
                        </Form.Select>
                      </div>
                      <div className="col-md-2 pr-1">
                        <label>producto</label>
                        <Form.Select
                          aria-label="Default select example"
                          id="producto"
                        >
                        </Form.Select>
                      </div>
                      <div className="col-md-2 pr-1">
                        <label>Cantidad</label>
                        <Form.Select
                          aria-label="Default select example"
                          id="cantidad"
                        >
                          
                        </Form.Select>
                      </div>
                      <input
                        onClick={addRow}
                        className="col-md-1 pr-1"
                        type="button"
                        value="Agregar"
                        style={{ marginTop: "auto", marginRight: "auto" }}
                      />
                    </div>
                  </Form>
                </div>
                <div className="row">
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
