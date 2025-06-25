import React from 'react'
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import './App.css'

function App() {
 

  return (
    <>
   
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
