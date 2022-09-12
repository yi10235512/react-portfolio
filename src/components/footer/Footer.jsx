import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-icon">
        <li><a href="https://github.com/" target="_blank"><BsGithub /></a></li>
        <li><a href="https://www.linkedin.com/" target="_blank"><BsLinkedin /></a></li>
        <li><a href="https://www.facebook.com/" target="_blank"><BsFacebook /></a></li>
        <li><a href="https://instagram.com/" target="_blank"><BsInstagram /></a></li>
      </ul>
      <small>&copy; Nora Tu. All rights reserved.</small>
    </div>
  )
}

export default Footer;
