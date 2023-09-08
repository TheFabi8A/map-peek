import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { NextUIProvider } from "@nextui-org/react";

import CountriesContextProvider from "@countries-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <CountriesContextProvider>
        <App />
      </CountriesContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
