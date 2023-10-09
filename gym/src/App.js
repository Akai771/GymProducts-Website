import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Prod from "./Components/Categories";
import DietCalc from "./Components/DietCalc";
import NavBar from "./Components/Navbar";
import PracPage from "./Components/PracPage";
import ProductDisplay from "./Components/ProductPage/ProductDisplay";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Categories" element={<Prod />} />
          <Route exact path="/DietCalc" element={<DietCalc />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/PracPage" element={<PracPage/>} />
          <Route exact path="/ProductDisplay" element={<ProductDisplay/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;