import React from "react";
import "./hamburger.css";

const Hamburger = ({ isOpen, onClick, className }) => {
  return (
    <div id="hamburger"
      className={isOpen ? "active " + className : className}
      onClick={onClick}>
    </div>
  )
}

export default Hamburger;
