import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Prod from "./Components/Product";
import DietCalc from "./Components/DietCalc";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Product" element={<Prod />} />
          <Route exact path="/DietCalc" element={<DietCalc />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;