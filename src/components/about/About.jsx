import React, { useState } from "react";
import "./about.css"
import avatar from "../../assets/avatar.jpeg"

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-avatar">
          <img src={avatar}></img>
        </div>
        <div className="about-content">
          <div className="greeting-msg">
            <h3>Welcome to my sites</h3>
            <h1>Hello! I'm Yi&#8209;Hsuan <br />
              Software Developer</h1>
            <h2>a Fullstack Developer, love learning new stuff. </h2>
          </div>
          <div className="cta">
            <a className="btn">Contact me</a>
            <a className="btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About; 
