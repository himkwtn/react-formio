import React from "react";
import ReactDOM from "react-dom";
import { Components } from "react-formio";
import App from "./App";
import components from "./components";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

Components.setComponents(components);
console.log(Components.components);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
