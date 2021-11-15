import { useEffect } from "react";
import {Form} from 'react-bootstrap';
import axios from "axios";

export default function AgregarEmpleado() {
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    document.getElementById("aEmpleados").classList.add("active");
  }, []);

  async function addEmployee(e) {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:4000/api/users/saveuser", {
      name: document.getElementById("name").value,
      apellido: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      direccion: document.getElementById("address").value,
      telefono: document.getElementById("phone").value,
      Cedula: document.getElementById("cedula").value,
      Password: document.getElementById("password").value,
      rol: document.getElementById("Rol").value,
      cargo: document.getElementById("cargo").value,
      salario: document.getElementById("salary").value,
    });
    console.log(data);
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Agregar Empleado</h4>
            </div>
            <div className="card-body">
              <form type="Submit" onSubmit={addEmployee}  >
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        id="lastname"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Cedula</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cedula"
                        id="cedula"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Telefono</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                        id="phone"
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
                        id="address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Correo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Correo"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Cargo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cargo"
                        id="cargo"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Salario</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Salario"
                        id="salary"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Rol</label>
                      <Form.Select aria-label="Default select example" id="Rol" >
                        <option value="Empleado">Empleado</option>
                        <option value="Admin">Admin</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Contraseña</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contraseña"
                        id="password"
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
