import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Ventures from './components/Ventures'
import Founder from './components/Founder'
import Sustainability from './components/Sustainability'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-soft-beige">
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Ventures />
              <Founder />
              <Sustainability />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
