import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {ValuesProvider }from "./Providers/forms"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ValuesProvider>
        <App />
      </ValuesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
