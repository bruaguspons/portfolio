import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header />
      <section id='about' style={{ height: 500 + 'px' }}>About</section>
      <section id='skills' style={{ height: 500 + 'px' }}>Skills</section>
      <section id='projects' style={{ height: 500 + 'px' }}>Projects</section>
      <section id='contact' style={{ height: 500 + 'px' }}>Contact</section>
    </>
  )
}

export default App
