import "./agregarProductos.css";
import { useEffect,useState} from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

export default function AgregarProductos() {
  const [file,setFile] = useState();
  const [imagen,setimage] = useState();
  const [fileUrl,setfileUrl] = useState(null);

  function onChangefile(e){
    setFile(e.target.files[0]);
    const imgfile = URL.createObjectURL(e.target.files[0]);
    setfileUrl(imgfile);
  }

  function img() {
    if (fileUrl !== null) {
      return <img src={fileUrl} style={{ width: "200px" }} alt="img"></img>;
    }
  }

  async function subir(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name",document.getElementById("name").value)
    await axios.post("/api/products/", {formData});
    setfileUrl(null);
  }

  useEffect(() => {
    document.title = "VProduct";
    if (!!document.getElementsByClassName("sidebarListItem active")[0]) {
      document
        .getElementsByClassName("sidebarListItem active")[0]
        .classList.remove("active");
    }
    document.getElementById("VerProducto").classList.add("active");
  }, []);

  async function addProduct(e) {
    e.preventDefault();
    const { data } = await axios.post("/api/products/", {
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      category: document.getElementById("category").value,
      description: document.getElementById("Detalles").value,
      image: document.getElementById("img").value,
      stock: document.getElementById("stock").value,
      model: document.getElementById("model").value,
    });
    console.log(data);
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Agregar Producto</h4>
            </div>
            <div className="card-body">
              <form type="Submit" onSubmit={addProduct}>
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
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Categoria</label>
                      <Form.Select aria-label="Default select example" id="Rol" >
                        <option value="Motor">Motor</option>
                        <option value="Transmision">Transmision</option>
                        <option value="Direccion">Direccion</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Detalles</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                        id="Detalles"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>Imagen</label>
                      <Form.Group controlId="formFile" className="mb-3" >
                        <Form.Control type="file" onChange={(e)=>onChangefile(e)}  />
                      </Form.Group>
                      {img()}
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
                  Agregar
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
