import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

////
import { withRouter } from 'react-router-dom';

////
import Nav from './components/Nav';
import Header from './components/Header';
import ProjectsContainer from './components/ProjectsContainer';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App main">
      <Nav />
      <Header />
      <About className="about" />
      <ProjectsContainer className="projects"/>
      <Contact className="contact" />
      <Footer />
    </div>
  );
}

export default App;