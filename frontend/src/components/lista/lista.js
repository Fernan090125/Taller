import { ListGroup, Button } from "react-bootstrap";

export default function Lista(props) {
  return (
    <div className="home">
      <ListGroup
        id="myUL"
        style={{
          width: "1000px",
          display: "flex",
          marginTop: "",
          backgroundColor: "",
        }}
      >
        {props.contenido.map((item) => (
          <li>
            <ListGroup.Item
              style={{
                maxWidth: "",
                backgroundColor: "var(--color3)",
                height: "100px",
              }}
            >
              {props.derecha} {props.izquierda}
            </ListGroup.Item>
          </li>
        ))}
      </ListGroup>
    </div>
  );
}
