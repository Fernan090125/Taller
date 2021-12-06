import { useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function AgregarEmpleado() {
  var numeros = "0123456789";
  const [alertaNombreN, setalertaNombreN] = useState(false);

  const [alertaNombreT, setalertaNombreT] = useState(false);

  const [alertaCedulaT, setAlertaCedulaT] = useState(false);

  const [alertaCedulaL, setAlertaCedulaL] = useState(false);

  const [alertaTelefonoT, setAlertaTelefonoT] = useState(false);

  const [alertaTelefonoL, setAlertaTelefonoL] = useState(false);

  const [alertaSalarioT, setAlertaSalarioT] = useState(false);

  const [problemas, setProblemas] = useState(false);

  function verifyNumber(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      if (numeros.indexOf(cadena.charAt(i), 0) == -1) {
        return false;
      }
    }
    return true;
  }

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
      alert("Por favor, llene todos los campos correctamente");
    }

    if (problemas == false) {
      const { data } = await axios.post("/api/users/saveuser", {
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
      alert("USUARIO AGREGADO");
      console.log(data);
      document.getElementById("name").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("address").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("cedula").value = "";
      document.getElementById("password").value = "";

      document.getElementById("Rol").value = "";
      document.getElementById("cargo").value = "";
      document.getElementById("salary").value = "";
    }
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
              <form type="Submit" onSubmit={addEmployee}>
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
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        id="password"
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
