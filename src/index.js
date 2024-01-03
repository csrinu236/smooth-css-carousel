import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./carousel.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { init } from "@noriginmedia/norigin-spatial-navigation";

init({
  // debug: true
  throttle: 150,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
