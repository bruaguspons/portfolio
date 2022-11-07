import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
