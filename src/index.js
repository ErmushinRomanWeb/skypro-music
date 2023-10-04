import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import state from "./state";
import { styled, createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  
  /* border: 1px solid white; */
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
button,
._btn {
  cursor: pointer;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
