import React from 'react'
import './App.css'

////
import Nav from './components/Nav'
import Header from './components/Header'
import ProjectsContainer from './components/ProjectsContainer'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App main'>
      <Nav />
      <Header />
      <About />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
