import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
