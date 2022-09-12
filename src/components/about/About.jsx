import React, { forwardRef } from "react";
import "./about.css"
import avatar from "../../assets/avatar.jpeg"

const About = forwardRef((props, ref) => (
  <section id="about" ref={ref}>
    <div className="container about-container">
      <div className="about-avatar">
        <img src={avatar}></img>
      </div>
      <div className="about-content">
        <div className="greeting-msg">
          <h3>Welcome to my sites</h3>
          <h1>Hello! I'm Nora <br />
            Software Developer</h1>
          <h2>A Fullstack Developer, love learning new things.</h2>
        </div>
        <div className="cta">
          <a className="btn btn-shadow" href="#contact">Contact me</a>
          <a className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </div>
  </section>
))
export default About; 
