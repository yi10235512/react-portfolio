import React from "react";
import "./footer.css"
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-icon">
        <li><a href="https://github.com/yi10235512" target='_blank'><BsGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/yi-hsuan-tu-63631324b/"><BsLinkedin /></a></li>
        <li><a href="#"><BsFacebook /></a></li>
        <li><a href="#"><BsInstagram /></a></li>
      </ul>
      <small>&copy; Yi-Hsuan Tu. All rights reserved.</small>
    </div>
  )
}

export default Footer;
