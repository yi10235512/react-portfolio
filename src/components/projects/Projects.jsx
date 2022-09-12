import React from "react";
import "./projects.css";
import PROJECT_IMG_1 from "../../assets/project1.jpeg";
import PROJECT_IMG_2 from "../../assets/project2.jpeg";
import PROJECT_IMG_3 from "../../assets/project3.jpeg";
import PROJECT_IMG_4 from "../../assets/project4.jpeg";

const project_data = [
  {
    id: 1,
    image: PROJECT_IMG_1,
    name: "Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com",
    figma: "https://www.figma.com"
  },
  {
    id: 2,
    image: PROJECT_IMG_2,
    name: "Book Management System",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    github: "https://github.com",
    figma: "https://www.figma.com"
  },
  {
    id: 3,
    image: PROJECT_IMG_3,
    name: "Event Storming",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com",
    figma: "https://www.figma.com"
  },
  {
    id: 4,
    image: PROJECT_IMG_4,
    name: "Kanban System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com",
    figma: "https://www.figma.com"
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects-container">
        <h2>My Recent Work</h2>
        <h1>Projects</h1>
        <div className="project-list">
          {
            project_data.map(project => {
              return (
                <article className="project-item">
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-info">
                    <div className="project-description">
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-item-cta">
                      {project.github && <a href={project.github} className="btn btn-shadow" target="_blank">Github</a>}
                      {project.figma && <a href={project.figma} className="btn btn-shadow" target="_blank">Figma</a>}
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects;

