import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
