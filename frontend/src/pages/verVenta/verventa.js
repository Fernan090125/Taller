import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { FormGroup,FormControl } from "react-bootstrap";
import axios from "axios";

export default function Verventapage(props) {
  const [venta, setventa] = useState({});
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    const id = window.location.pathname.split("/")[2];

    async function getSaleInfo() {
      const sale = await axios.get("/api/sales/"+id);
      console.log(sale);
      setventa(sale.data.sale);
    }
    
    getSaleInfo();
    console.log(venta);

    document.getElementById("eEmployees").classList.add("active");
  }, []);

  useEffect(() => {
    document.getElementById("date").value = venta.date;
    // document.getElementById("facturaNumber").value = venta.id;
    // document.getElementById("cliente").value = venta.infocliente.customer;
    // document.getElementById("cedulaCli").value = venta.infocliente.customerId;
    // document.getElementById("address").value = empleado.direccion;
    // document.getElementById("phone").value = empleado.telefono;
    // document.getElementById("cargo").value = empleado.cargo;
    // document.getElementById("salary").value = empleado.salario;
    // document.getElementById("cedula").value = empleado.Cedula;

  }, []);

 
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Realizar Venta</h4>
            </div>
            <div className="card-body">
              <form >
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Fecha</label>
                      <FormGroup controlId="date" bsSize="large">
                        <FormControl type="date" required />
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
                        id="facturaNumber"
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
                        required
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
                        required
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
                        id="direccion"
                        required
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
                        required
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
                        <input
                          type="number"
                          aria-label="Default select example"
                          id="cantidad"
                          className="form-control"
                          min="1"
                          defaultValue="1"
                        >
                          
                        </input>
                      </div>
                      <input
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
