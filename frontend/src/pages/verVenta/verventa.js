import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";

export default function Verventapage(props) {
  const [venta, setventa] = useState({});
  useEffect(() => {
    document.title = "Home";

    const id = window.location.pathname.split("/")[2];

    async function getSaleInfo() {
      const sale = await axios.get("/api/sales/" + id);
      console.log(sale.data.sale);
      setventa(sale.data.sale);
    }

    getSaleInfo();
  }, []);

  useEffect(() => {
    if (venta.infocliente) {
      document.getElementById("date").value = venta.date;
      document.getElementById("facturaNumber").value = venta.id;
      document.getElementById("cliente").value = venta.infocliente.customer;
      document.getElementById("cedulaCli").value = venta.infocliente.customerId;
      document.getElementById("direccion").value = venta.infocliente.adress;
      document.getElementById("TelefonoCli").value = venta.infocliente.phone;
    }
  }, [venta]);

  function renderProducts() {
    if (venta.products) {
      return venta.products.map((producto) => (
        <tr>
          <td>{producto.quantity}</td>
          <td>{producto.product}</td>
          <td>{producto.precioUnitario}</td>
          <td>{producto.precioTotal}</td>
        </tr>
      ));
    }
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Venta</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Fecha</label>
                      <FormGroup controlId="date" bsSize="large">
                        <FormControl type="date" required  disabled/>
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
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row"></div>
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
                    <tbody id="filas">{renderProducts()}</tbody>
                  </Table>
                </div>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
