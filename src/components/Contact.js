import React from 'react';

const Contact = () => {
  return(
    <div className="contact-wrapper" id="contact">
      <h2 className="heading-tertiary">contact</h2>

      <p className="contact__link">malvwoods@gmail.com</p>
      <p className="contact__link">(303) 358-5893</p>
      <img className="avatar" src="img/me.png" alt="me"/>
      <p className="paragraph">let's stay in touch!</p>

      <div className="contact__link--icons">
        <a href="https://www.linkedin.com/in/mallory-virginia-woods" target="_blank" rel="noopener noreferrer"><img src= "img/logos/linkedin.svg" alt="linkedin" className="contact__link--icon"></img></a>

        <a href="https://github.com/mallmsy" target="_blank" rel="noopener noreferrer" className="contact__item"><img src= "img/logos/github.svg" alt="github" className="contact__link--icon"></img></a>

        <a href="https://www.instagram.com/mallmsy/" target="_blank" rel="noopener noreferrer" className="contact__item"><img src= "img/logos/instagram.svg" alt="instagram" className="contact__link--icon"></img></a>

        <a href="https://twitter.com/mallmsyyy" target="_blank" rel="noopener noreferrer" className="contact__item"><img src= "img/logos/twitter.svg" alt="twitter" className="contact__link--icon"></img></a>

        <a href="https://medium.com/@malvwoods" target="_blank" rel="noopener noreferrer" className="contact__item"><img src= "img/logos/medium.svg" alt="medium" className="contact__link--icon"></img></a>
      </div>
    </div>
  )
};

export default Contact;