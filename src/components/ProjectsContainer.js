import React from 'react'

import Project from './Project'
import projects from '../projects.js'

const ProjectsContainer = () => {
  return (
    <div className='projects' id='projects'>
      <div className='heading-tertiary'>projects</div>
      {projects.map(project => {
        return (
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            video={project.video}
            builtWith={project.builtWith}
            repo={project.repo}
            demo={project.demo}
            buttonText={project.buttonText}
            key={project.name}
          />
        )
      })}
    </div>
  )
}

export default ProjectsContainer
