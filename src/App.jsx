import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";

import "./App.css"
import Visualize from "./Pages/Visualize/Visualize";
import React, { useState } from "react";

function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="content">
        <Routes>
          {/* <Route></Route> */}
          <Route path="/" element={<Home/>} />

          <Route path="/visualize" element={<Visualize/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;