import React, { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./navbar.css";

const Navbar = () => {
  const scrollPosition = useScrollPosition()
  const [click, setClick] = useState(false)
  const handleClick = (e) => setClick(!click)

  return (
    <div className={scrollPosition > 100 ? "header header-bg" : "header"}>
      <div className="container header-container">
        <nav className="navbar">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <div id="toggle" className={click ? "active" : ""} onClick={handleClick}></div>
          <div className={click ? "nav-items active" : "nav-items"}>
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
