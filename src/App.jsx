import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Cursor from './Components/Cursor'
import Reviews from './Components/Reviews'



export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contacts />
      <Footer />
      <Cursor />
    </div>
  )
}
