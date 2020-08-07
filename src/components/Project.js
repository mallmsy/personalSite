import React from 'react'

const Project = ({
  name,
  description,
  image,
  video,
  builtWith,
  repo,
  demo,
  buttonText
}) => {
  return (
    <div className='projects__box'>
      <h2 className='heading-secondary'>{name}</h2>
      <p className='paragraph'>{description}</p>
      <a href={demo} target='_blank' rel='noopener noreferrer'>
        <button className='button'>{buttonText}</button>
      </a>
      <div className='projects__box--secondary'>
        <img className='projects__image' src={image} alt={name}></img>
        <div className='projects__box--links'>
          <span>
            <a
              href={repo}
              target='_blank'
              rel='noopener noreferrer'
              alt='link to repository'
            >
              See the Code >>
            </a>
          </span>
        </div>
      </div>
      <div className='projects__built-with'>
        <ul className='projects__built-with--ul'>
          {builtWith.map(tech => {
            return (
              <li className='projects__built-with--li'>
                <img src={`img/logos/${tech}.png`} alt={tech} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Project
