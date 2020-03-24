import React from 'react';

import Project from './Project';
import projects from '../projects.js';



const ProjectsContainer = () => {
  return(
    <div className="section" id="projects">
      <div className="heading-tertiary">projects</div>
      {projects.map(project => {
        return(<Project name={project.name} desc={project.description} key={project.name} />)
      })}
    </div>
  )
}

export default ProjectsContainer;