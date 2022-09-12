import React, { forwardRef } from "react";
import "./skills.css"
import { HiBadgeCheck } from "react-icons/hi";

const skill_data = [
  {
    id: 1,
    title: "Programming Languages",
    items: ["C/C++", "Python", "Java", "Javascript"]
  },
  {
    id: 2,
    title: "Web Technologies",
    items: ["HTML", "CSS", "React", "Redux", "Spring Boot"]
  },
  {
    id: 3,
    title: "Development Tools",
    items: ["Git", "Jenkins", "Docker", "Selenium", "Robot Framework"]
  }
]

const Skills = forwardRef((props, ref) => (
  <section id="skills" className="bg-even" ref={ref}>
    <div className="container skills-container">
      <h2>The Skills I Have</h2>
      <h1>Experience</h1>
      <div className="skill-cards">
        {skill_data.map(skill => {
          return (
            <article key={skill.id} className="skill-card">
              <div className="card-header">{skill.title}</div>
              <ul className="card-content">
                {skill.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <HiBadgeCheck className="card-content-icon" />
                      <p>{item}</p>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </div>
  </section>
))
export default Skills;

