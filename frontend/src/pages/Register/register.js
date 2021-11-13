import {  Navbar,  Nav,  Container,  NavDropdown,  Form,  Button,  Row,  Col,} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css"
export default function Register() {
  return (
    <>
      <Container
        className="a "
        style={{
          width: "450px",
          height: "620px",
          marginTop: "0px",
          borderColor: "black",
        }}
      >
        <h1
          id="titulo"
          className="shadow-sm text-success mt-5 p-3 text-center "
        >
          Registro
        </h1>

        <Form
          className="d-grid gap-2"
          id="registerForm"
        >
          <Form.Group className="group" controlId="formBasicUser">
            <Form.Label style={{ color: "white" }}>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Usuario"
            />
          </Form.Group>

          <Form.Group className="group" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Correo</Form.Label>
            <Form.Control
              type=""
              placeholder="Correo"
            />
          </Form.Group>

          <Form.Group className="group" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
            />
          </Form.Group>

          <Form.Group className="group" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"            />
          </Form.Group>

          <div className="signup_link">
            Ya tienes cuenta? <Link>Ingresa aqui</Link>
          </div>

          <Button
            variant="success btn-block"
            type="submit"
            style={{
              backgroundColor: "var(--color4)",
              border: "none",
              height: "38px",

            }}
            id="sub"
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}