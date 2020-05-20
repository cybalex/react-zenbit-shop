import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import { App } from "./App";

ReactDOM.render(
//  <React.StrictMode> // a temporary fix for https://github.com/ant-design/ant-design/issues/22493
  <React.Suspense fallback={''}>
    <App />
  </React.Suspense>,
//  </React.StrictMode>,
  document.getElementById('root')
);
