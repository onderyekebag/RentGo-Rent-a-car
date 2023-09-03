import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/styles.scss";
import { Provider as Storeprovider } from "react-redux";
import store from "./store/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Storeprovider store={store}>
      <App />
    </Storeprovider>
  </React.StrictMode>
);
