import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";

import { useEffect, useState } from "react";

import useAuth from "../../auth/useAuth";
import axios from "axios";

export default function Nav() {
  const { user } = useAuth();

  const [userName, setUserName] = useState();

  return (
    <Navbar style={{ paddingLeft: "10px" }}>
      <Navbar.Brand
        href="#home"
        style={{ fontSize: "36px", fontWeight: "0px", margin: "100px" }}
      >
        <b>Taller Lambraño</b>
      </Navbar.Brand>

      <Container className="hola">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style = {{marginRight:"10px"}}>
            Logeado como: <a href="#login">{user.username}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
