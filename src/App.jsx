import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";

import About from "./pages/About";
import Respis from "./pages/Respis";
import Comunityfull from "./pages/Comunityfull";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/About" element={<About />} />
       
        <Route path="/Comunity" element={<Comunityfull />} /> 
      </Route>

      <Route path="/Respis" element={<Respis />} />
    </Routes>
  );
}
export default App;
