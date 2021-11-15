import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./auth/AuthProvider";
import SSRProvider from "react-bootstrap/SSRProvider";

function App() {
  return <AppRouter />;
}

export default App;
