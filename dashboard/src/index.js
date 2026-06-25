import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./index.css";
import Home from "./components/Home";

axios.get("https://zerodha-clone-backend-tawny.vercel.app/profile", {withCredentials: true,})
  .then(() => {
    const root = ReactDOM.createRoot(
      document.getElementById("root")
    );
    root.render(
      <React.StrictMode>
          <BrowserRouter>
              <Routes>
                  <Route
                      path="/*"
                      element={<Home />}
                  />
              </Routes>
          </BrowserRouter>
      </React.StrictMode>
    );
  })
  .catch(() => {
    window.location.href ="http://localhost:3000";
});