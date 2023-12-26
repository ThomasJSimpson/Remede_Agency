import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App.js";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  /* </React.StrictMode> */
);
