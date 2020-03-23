import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

////
import { withRouter } from 'react-router-dom';

////
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Section className="about" />
      <Section className="projects"/>
      <Section className="contact" />
      <Footer />
    </div>
  );
}

export default App;