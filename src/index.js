import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { location } from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
