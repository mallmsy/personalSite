import React from 'react';

const Contact = () => {
  return(
    <div className="contact-wrapper" id="contact">
      <h2 className="heading-tertiary">contact</h2>

      <p className="contact__link">mallory.v.woods@gmail.com</p>
      <p className="contact__link">(303) 358-5893</p>
      <img className="avatar" src="img/me.png" alt="me"/>
      <p className="paragraph">let's stay in touch!</p>

      <div className="contact__link--icons">
        <a href="https://www.linkedin.com/in/mallory-virginia-woods" target="_blank"><img src= "img/logos/linkedin.svg" className="contact__link--icon"></img></a>

        <a href="https://github.com/mallmsy" target="_blank" className="contact__item"><img src= "img/logos/github.svg" className="contact__link--icon"></img></a>

        <a href="https://www.instagram.com/mallmsy/" target="_blank" className="contact__item"><img src= "img/logos/instagram.svg" className="contact__link--icon"></img></a>

        <a href="https://twitter.com/mallmsyyy" target="_blank" className="contact__item"><img src= "img/logos/twitter.svg" className="contact__link--icon"></img></a>

        <a href="https://medium.com/@malvwoods" target="_blank" className="contact__item"><img src= "img/logos/medium.svg" className="contact__link--icon"></img></a>
      </div>
    </div>
  )
};

export default Contact;