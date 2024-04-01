import React from 'react'
import "./App.css"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home.jsx';
import About from './Component/about/About.jsx';
import Skills from './Component/Skills/Skills.jsx';
import Services from './Component/services/Services.jsx';
import Qualification from './Component/Qualifications/Qualification.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Scrollup from './Component/Scrollup/Scrollup.jsx';

const App = () => {
  return (
 <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
        </main>
        <Footer/>
     <Scrollup/>
      </>
  )
}

export default App