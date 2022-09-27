import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {ValuesProvider }from "./providers/forms"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <ValuesProvider>
          <App />
        </ValuesProvider>
      </React.StrictMode>
    </BrowserRouter>
);
