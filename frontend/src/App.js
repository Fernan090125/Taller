import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./auth/AuthProvider";
import SSRProvider from "react-bootstrap/SSRProvider";

function App() {
  return (
    <SSRProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <AuthProvider>
          <AppRouter />       
      </AuthProvider>
    </SSRProvider>
  );
}

export default App;
