import React from 'react';

const Header = () => {
  return(
    <div className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Mallory Woods</span>
          <div className="heading-primary--sub">Full-Stack Engineer</div>
          <div className="circles__orange"></div>
          <div className="circles__pink"></div>
          <div className="circles__white"></div>
        </h1>
      </div>
    </div>
  )
}

export default Header;