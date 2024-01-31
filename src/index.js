import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./components/LanguageContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
