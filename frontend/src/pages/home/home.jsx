import "./home.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";

export default function Home() {
  const { isLogged } = useAuth();
  const { user } = useAuth();

  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
    if (isLogged()) {
      document.getElementById("inicio").classList.add("active");
    }
  }, [isLogged]);

  return (
    <div className="home">
      <Link to="/login">About</Link>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>
      <h1>hola</h1>

      <Link to="/ingresar">About</Link>
    </div>
  );
}
