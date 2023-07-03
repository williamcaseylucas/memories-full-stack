import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Need for reducs
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";

const store = configureStore({ reducer: reducers, middleware: [thunk] });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
