import React from 'react'
import "./App.css"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home.jsx';
import About from './Component/about/About.jsx';

const App = () => {
  return (
 <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        </main>
      </>
  )
}

export default App