import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import useAuth from "../../auth/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const [users, setUsers] = useState([]);

  const [userTemp, setUserTemp] = useState();

  const [passwordTemp, setPasswordTemp] = useState();

  useEffect(() => {
    async function fetchData() {
      let a = await axios.get("/api/users");
      setUsers(a.data);
    }
    fetchData();
  }, []);

  async function loginUser(e) {
    e.preventDefault();

    let user = users.find((user) => user.name === userTemp);

    console.log(user);

    if (user) {
      if (user.Password === passwordTemp) {
        login(user._id , user.name , user.rol);
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario no encontrado");
    }

  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  function onChangeUser(e) {
    setUserTemp(e.target.value);
  }

  function onChangePassword(e) {
    setPasswordTemp(e.target.value);
  }

  useEffect(() => {
    console.log(userTemp);
    console.log(passwordTemp);
  }, [passwordTemp, userTemp]);

  return (
    <>
      <Container
        style={{
          width: "400px",
          height: "500px",
          marginTop: "70px",
        }}
        className="a"
      >
        <h1
          id="titulo"
          className="shadow-sm text-success mt-5 p-3 text-center "
        >
          {" "}
          Ingresar
        </h1>
        <Form className="d-grid gap-2 " id="loginForm">
          <Form.Group
            className="group"
            controlId="formBasicUser"
            onChange={(e) => onChangeUser(e)}
          >
            <Form.Label style={{ color: "cornflowerblue" }}>Usuario</Form.Label>
            <Form.Control type="user" placeholder="Usuario" required/>
          </Form.Group>

          <Form.Group
            className="group"
            controlId="formBasicPassword"
            onChange={(e) => onChangePassword(e)}
          >
            <Form.Label style={{ color: "cornflowerblue" }}>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" required/>
          </Form.Group>
          <Button
            variant="success btn-block"
            style={{
              backgroundColor: "cornflowerblue",
              border: "none",
              height: "38px",
            }}
            id="loginB"
            onClick={(e) => loginUser(e)}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}
