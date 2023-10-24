import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { NextUIProvider } from "@nextui-org/react";

import CountriesContextProvider from "@countries-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <CountriesContextProvider>
          <App />
        </CountriesContextProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
