import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IconLib/style.css";
import AuthProvider from "./auth/AuthProvider";
import SSRProvider from "react-bootstrap/SSRProvider";

ReactDOM.render(
  <SSRProvider >
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      media="all"
    />
    <AuthProvider>
      <App />
    </AuthProvider>
  </SSRProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
