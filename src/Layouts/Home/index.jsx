import React from 'react'
import Navbar from './../../Components/Navbar'
import Presentation from './../../Components/Presentation'
import Services from './../../Components/Services'
import Testimonials from './../../Components/Testimonials'
import Prices from './../../Components/Prices'
import Footer from './../../Components/Footer'
import Soubscribe from './../../Components/Soubscribe'
import Features from './../../Components/Features'
import Partenariat from './../../Components/Partenariat'
import Actualites from './../../Components/Actualites'
import DevenirPartenire from './../../Components/DevenirPartenire'
import Contact from './../../Components/Contact'
import About from './../../Components/About'
import GetStarted from './../../Components/GetStarted'
import {Faq} from './../../Components/Faq'
import ScrollToTop from '../../Helpers/ScrollToTop'

const index = () => {
  return (
    <>
      <ScrollToTop/>
        <Presentation/>
        <About/>
        <GetStarted/>
        <Actualites/>
        <Features/>
        <Partenariat/>
        <Services/>
        <Prices/>
        <GetStarted/>
        <DevenirPartenire/>
        <Testimonials/>
        <Faq/>
        <Soubscribe/>
    </>
  )
}

export default index