import { useEffect } from "react";

export default function RealizarVenta() {
  useEffect(() => {
    document.title = "home";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }

    document.getElementById("dSales").classList.add("active");
  }, []);

  return (
    <div className="home">
      <h1>esta es la pestaña de realizar venta</h1>
    </div>
  );
}
