import React, { useEffect, useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./navbar.css";
import Hamburger from "./Hamburger";

const Navbar = ({ offsets }) => {

  const scrollPosition = useScrollPosition();
  const [activeNav, setActiveNav] = useState("#");
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (scrollPosition >= offsets.aboutOffset && scrollPosition < offsets.skillsOffset) {
      setActiveNav("#about")
    } else if (scrollPosition >= offsets.skillsOffset && scrollPosition < offsets.projectsOffset) {
      setActiveNav("#skills")
    } else if (scrollPosition >= offsets.projectsOffset && scrollPosition < offsets.contactOffset) {
      setActiveNav("#projects")
    } else if (scrollPosition >= offsets.contactOffset) {
      setActiveNav("#contact")
    }
  }, [scrollPosition])

  return (
    <div className={scrollPosition > 100 ? "header header-bg" : "header"}>
      <div className="container header-container">
        <nav className="navbar">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <Hamburger className="hamburger" isOpen={click} onClick={() => setClick(!click)} />
          <div className={click ? "nav-items active" : "nav-items"}>
            <a href="#about" className={activeNav === "#about" ? "nav-item active" : "nav-item"} onClick={() => setActiveNav("#about")}>About</a>
            <a href="#skills" className={activeNav === "#skills" ? "nav-item active" : "nav-item"} onClick={() => setActiveNav("#skills")}>Skills</a>
            <a href="#projects" className={activeNav === "#projects" ? "nav-item active" : "nav-item"} onClick={() => setActiveNav("#projects")}>Projects</a>
            <a href="#contact" className={activeNav === "#contact" ? "nav-item active" : "nav-item"} onClick={() => setActiveNav("#contact")}>Contact</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
