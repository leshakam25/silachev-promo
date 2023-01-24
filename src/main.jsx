import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { Provider } from "react-redux";
import store from "./store";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
