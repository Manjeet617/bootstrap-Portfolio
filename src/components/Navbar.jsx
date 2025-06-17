import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Manjeet</Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={toggle ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white" onClick={handleToggle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white" onClick={handleToggle}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link text-white" onClick={handleToggle}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link text-white" onClick={handleToggle}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white" onClick={handleToggle}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
