import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal")
  const titles = document.querySelectorAll(".title")
  for (let i = 0; i < reveals.length; i++) {
    let heigth = window.innerHeight
    let elementTop = reveals[i].getBoundingClientRect().top
    let elementVisible = 70;
    if (elementTop < heigth - elementVisible) {
      reveals[i].classList.add("active");
      titles[i].classList.add("effect")
    } else {
      reveals[i].classList.remove("active");
      titles[i].classList.remove("effect")
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
