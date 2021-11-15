import { useEffect } from "react";

export default function VerVentas() {
  useEffect(() => {
    document.title = "Home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    document.getElementById("sSales").classList.add("active");
  }, []);

  return (
    <div className="home">
      <h1>esta es la pestaña de ver ventas</h1>
    </div>
  );
}
