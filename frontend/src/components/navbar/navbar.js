import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";

export default function Nav() {
  return (
    <Navbar>
      <Container className = "hola">
        <Navbar.Brand href="#home" style = {{fontSize:"36px" , fontWeight:"0px"}}><b>Taller Lambraño</b></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
