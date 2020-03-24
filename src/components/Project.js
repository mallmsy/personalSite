import React from 'react';

const Project = ({name, desc}) => {
  return(
    <div className="projects__box">
      <h2 className="heading-secondary">{name}</h2>
      <p className="paragraph">{desc}</p>
    </div>
  )
}

export default Project;