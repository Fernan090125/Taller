import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function EditarEmpleadosPage(props) {
  const [empleado, setEmpleado] = useState({});
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    const id = window.location.pathname.split("/")[2];

    async function getEmployeeInfo() {
      const response = await axios.get("/api/users/" + id);

      console.log(response);

      setEmpleado(response.data.user);
    }

    getEmployeeInfo();

    document.getElementById("eEmployees").classList.add("active");
  }, []);

  useEffect(() => {
    document.getElementById("name").value = empleado.name;
    document.getElementById("lastname").value = empleado.apellido;
    document.getElementById("email").value = empleado.email;
    document.getElementById("phone").value = empleado.phone;
    document.getElementById("address").value = empleado.direccion;
    document.getElementById("phone").value = empleado.telefono;
    document.getElementById("cargo").value = empleado.rol;
    document.getElementById("salary").value = empleado.salario;
  }, [empleado]);

  async function editEmployee(e) {
    e.preventDefault();
    const id = document.getElementById("cedula").value;
    const { data } = await axios.put("/api/users/" + id, {
      name: document.getElementById("name").value,
      apellido: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      direccion: document.getElementById("address").value,
      telefono: document.getElementById("phone").value,
      Cedula: document.getElementById("cedula").value,
      rol: document.getElementById("Rol").value,
      cargo: document.getElementById("cargo").value,
      salario: document.getElementById("salary").value,
    });
    console.log(data);
    // document.getElementById("name").value = "";
    // document.getElementById("lastname").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("address").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("cedula").value = "";
    // document.getElementById("Rol").value = "";
    // document.getElementById("cargo").value = "";
    // document.getElementById("salary").value = "";
  }
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Editar Empleado</h4>
            </div>
            <div className="card-body">
              <form type="Submit" onSubmit={editEmployee}>
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
                      <Form.Select aria-label="Default select example" id="Rol">
                        <option value="Empleado">Empleado</option>
                        <option value="Admin">Admin</option>
                      </Form.Select>
                    </div>
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
