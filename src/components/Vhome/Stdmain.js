import React from 'react'
import Navbr from './nav/Navbr'
import About from './About/About'
import Home from './Home/Home'
import Contact from './contact/Contact'
import Footer from './Footer/Footer'
function Stdmain() {
  return (
    <div>
      <Navbr />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Stdmain
