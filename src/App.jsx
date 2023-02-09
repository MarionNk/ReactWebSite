import React from 'react'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Prices from './Components/Prices'
import Footer from './Components/Footer'
import Soubscribe from './Components/Soubscribe'
import Features from './Components/Features'
import Contact from './Components/Contact'

const App = () => 
(
  <>
    <Navbar/>
    <Presentation/>
    <Services/>
    <Prices/>
    <Features/>
    <Testimonials/>
    <Soubscribe/>
    <Contact/>
    <Footer/>
  </>
)

export default App