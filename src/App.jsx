import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <section id='projects' style={{ height: 500 + 'px' }}>Projects</section>
      <section id='contact' style={{ height: 500 + 'px' }}>Contact</section>
    </>
  )
}

export default App
