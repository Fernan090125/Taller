import {  Navbar,  Nav,  Container,  NavDropdown,  Form,  Button,  Row,  Col,} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css"
import useAuth from "../../auth/useAuth";



export default function Login() {
  const { login } = useAuth();
  return (
    <>
      <Container
      style={{
          width: "400px",
          height: "500px",
          marginTop: "70px",
        }} className="a">
        <h1
          id="titulo"
          className="shadow-sm text-success mt-5 p-3 text-center "
        >  Ingresar
        </h1>      
        <Form className="d-grid gap-2 " id="loginForm">
          <Form.Group className="group" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Usuario</Form.Label>
            <Form.Control type="user" placeholder="Usuario" />
          </Form.Group>

          <Form.Group className="group" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button
            variant="success btn-block"
            type="submit"
            style={{
              backgroundColor: "var(--color4)",
              border: "none",
              height: "38px",
            }}
            id="loginB"
            onClick={(e) => login("618ff364774fbb5a95625bcc")}
          >
            Login
          </Button>
          </Form>
        </Container>
    </>
  );
}


