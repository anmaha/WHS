import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import LogIn from "./components/Authentication";
import Images from "./components/Images";
import Music from "./components/Music";
import Update from "./components/Update";
import CreateNewImage from "./components/CreateNewImage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/addnewart" element={<CreateNewImage />} />
          <Route path="/update" element={<Update />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
