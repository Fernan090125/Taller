import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";

export default function Nav() {
  return (
    <Navbar style ={{paddingLeft:"10px"}}>
      <Navbar.Brand
        href="#home"
        style={{ fontSize: "36px", fontWeight: "0px" , margin:"100px"}}
      >
        <b>Taller Lambraño</b>
      </Navbar.Brand>

      <Container className="hola">
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
