import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store";
const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
