import "./EditarProductos.css";
import { useEffect } from "react";
import axios from "axios";

export default function EditProductos() {
  useEffect(() => {
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
      document.getElementById("EditProducto").classList.add("active");
  }, []);


  async function EditProduct(e) {
    e.preventDefault();
    const id=document.getElementById("name").value
    const { data } = await axios.put("/api/products/"+id, {
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      category: document.getElementById("category").value,
      description: document.getElementById("detalles").value,
      stock: document.getElementById("stock").value,
      model: document.getElementById("model").value,
    });
    console.log(data);
    // document.getElementById("name").value = "";
    // document.getElementById("lastname").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("address").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("cedula").value = "";
    // document.getElementById("Rol").value = "";
    // document.getElementById("cargo").value = "";
    // document.getElementById("salary").value = "";
    
  }
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Editar Producto</h4>
            </div>
            <div className="card-body">
              <form type="Submit">
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Precio</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        id="price"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Detalles</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                        id="detalles"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Cantidad</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Correo"
                        id="stock"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Modelo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cargo"
                        id="model"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-fill pull-right"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Editar
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}