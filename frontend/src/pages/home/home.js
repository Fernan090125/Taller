import { Link } from "react-router-dom";
import "./home.css"
export default function Home() {
  return (
    <div className = "home">
      <h1>esta es la pestaña de Home</h1>
      <i className="icon-UserLIco"> </i>

      <Link to="/ingresar">hola</Link>
    </div>
  );
}
