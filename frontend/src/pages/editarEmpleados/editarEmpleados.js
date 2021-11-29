import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function EditarEmpleadosPage(props) {
  var numeros = "0123456789";
  const [alertaNombreN, setalertaNombreN] = useState(false);

  const [alertaNombreT, setalertaNombreT] = useState(false);

  const [alertaCedulaT, setAlertaCedulaT] = useState(false);

  const [alertaCedulaL, setAlertaCedulaL] = useState(false);

  const [alertaTelefonoT, setAlertaTelefonoT] = useState(false);

  const [alertaTelefonoL, setAlertaTelefonoL] = useState(false);

  const [alertaSalarioT, setAlertaSalarioT] = useState(false);

  const [problemas, setProblemas] = useState(true);

  const [empleado, setEmpleado] = useState({});
  useEffect(() => {
    const id = window.location.pathname.split("/")[2];

    async function getEmployeeInfo() {
      const response = await axios.get("/api/users/" + id);

      console.log(response);

      setEmpleado(response.data.user);
    }

    getEmployeeInfo();
  }, []);

  useEffect(() => {
    document.getElementById("name").value = empleado.name;
    document.getElementById("lastname").value = empleado.apellido;
    document.getElementById("email").value = empleado.email;
    document.getElementById("phone").value = empleado.phone;
    document.getElementById("address").value = empleado.direccion;
    document.getElementById("phone").value = empleado.telefono;
    document.getElementById("cargo").value = empleado.cargo;
    document.getElementById("salary").value = empleado.salario;
    document.getElementById("cedula").value = empleado.Cedula;

    console.log(empleado);
  }, [empleado]);

  async function editEmployee(e) {
    e.preventDefault();

    if (/\d/.test(document.getElementById("name").value)) {
      setalertaNombreN(true);
    } else {
      setalertaNombreN(false);
    }

    if (/\d/.test(document.getElementById("lastname").value)) {
      setalertaNombreT(true);
    } else {
      setalertaNombreT(false);
    }

    if (document.getElementById("cedula").value.length != 10) {
      setAlertaCedulaT(true);
    } else {
      setAlertaCedulaT(false);
    }

    if (isNaN(document.getElementById("cedula").value)) {
      setAlertaCedulaL(true);
    } else {
      setAlertaCedulaL(false);
    }

    if (document.getElementById("phone").value.length != 10) {
      setAlertaTelefonoT(true);
    } else {
      setAlertaCedulaT(false);
    }

    if (isNaN(document.getElementById("phone").value)) {
      setAlertaTelefonoL(true);
    } else {
      setAlertaTelefonoL(false);
    }

    if (isNaN(document.getElementById("salary").value)) {
      setAlertaSalarioT(true);
      console.log("salario");
    } else {
      setAlertaSalarioT(false);
    }

    if (
      document.getElementById("cedula").value.length != 10 ||
      /\d/.test(document.getElementById("name").value) == true ||
      /\d/.test(document.getElementById("lastname").value) == true ||
      isNaN(document.getElementById("cedula").value) == true ||
      document.getElementById("phone").value.length != 10 ||
      isNaN(document.getElementById("phone").value) == true ||
      isNaN(document.getElementById("salary").value) == true
    ) {
      setProblemas(false);
      alert("owont");
    }

    if (problemas == false) {
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
    alert("Empleado editado");
  }}
    // document.getElementById("name").value = "";
    // document.getElementById("lastname").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("address").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("cedula").value = "";
    // document.getElementById("Rol").value = "";
    // document.getElementById("cargo").value = "";
    // document.getElementById("salary").value = "";


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
      if (alertaNombreN === true || alertaNombreT === true) {
        return alertaNumeros();
      } else {
        return null;
      }
    }
  
    function alertaSalario() {
      if (alertaSalarioT === true) {
        return (
          <h4 className="alert" id="alert1">
            Este campo solo puede contener numeros
          </h4>
        );
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
            <div className="card-header">
              <h4 className="card-title">Agregar Empleado</h4>
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
                        required
                      />
                      {alertaNombre()}
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
                        required
                      />
                      {alertaNombre()}
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
                        required
                      />
                      {alertaCedula()}
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
                        required
                      />
                      {alertaTelefono()}
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
                        required
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
                        required
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
                        required
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
                        required
                      />
                      {alertaSalario()}
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
                  EDITAR
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
