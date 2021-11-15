import "./home.css";
import Image from "react-bootstrap/Image";
import taller from "../../assets/taller.jpg";
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
      <Image src={taller} fluid />
    </div>
  );
}
