import React from "react";
import "./projects.css"
import NVIM_IMG from "../../assets/nvim-config.png"
import PORTFOLIO_IMG from "../../assets/portfolio.png"
import BOOKERFLY_IMG from "../../assets/bookerfly-1.png"

const project_data = [
  {
    id: 1,
    image: PORTFOLIO_IMG,
    name: "React Portfolio",
    description: "A Portfolio designd with Figma, implemented by React",
    github: "https://github.com/yi10235512/react-portfolio",
    figma: "https"
  },
  {
    id: 2,
    image: BOOKERFLY_IMG,
    name: "Bookerfly",
    description: "A Book Management System",
    github: "https://github.com/BookerFly",
    figma: null
  },
  {
    id: 3,
    image: NVIM_IMG,
    name: "Neovim configuration",
    description: "My Neovim configuration",
    github: "https://github.com/yi10235512/nvim-config",
    figma: null
  }
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
                      {project.github && <a href={project.github} className="btn" target="_blank">Github</a>}
                      {project.figma && <a href={project.figma} className="btn" target="_blank">Figma</a>}
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

