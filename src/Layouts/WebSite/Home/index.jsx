import React from 'react'
import Navbar from '../../../Components/Navbar'
import Presentation from '../../../Components/Presentation'
import Services from '../../../Components/Services'
import Testimonials from '../../../Components/Testimonials'
import Prices from '../../../Components/Prices'
import Footer from '../../../Components/Footer'
import Soubscribe from '../../../Components/Soubscribe'
import Features from '../../../Components/Features'
import Partenariat from '../../../Components/Partenariat'
import Actualites from '../../../Components/Actualites'
import DevenirPartenire from '../../../Components/DevenirPartenire'
import Contact from '../../../Components/Contact'
import About from '../../../Components/About'
import GetStarted from '../../../Components/GetStarted'
import {Faq} from '../../../Components/Faq'
import ScrollToTop from '../../../Helpers/ScrollToTop'
import { NavLink } from 'react-router-dom'
import { navlinks } from '../../../Constants'

const index = () => {
  return (
    <>
      <ScrollToTop/>
        <Presentation/>
        <About/>
        <Services/>
        <GetStarted/>
        <Prices/>
        <div className='mt-3 flex justify-center'>
          <NavLink
            to={navlinks[3].link}
            className="inline-flex bg-blue-600 text-white items-center justify-center h-12 px-10 font-bold text-lg tracking-wide transition duration-200 rounded-full shadow-lg bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            En savoir plus sur nos tarifs
          </NavLink>
        </div>
        <Actualites/>
        <DevenirPartenire/>
        <Partenariat/>
        <Testimonials/>
        <div className='mt-3 flex justify-center'>
          <NavLink
            to={navlinks[0].link}
            className="inline-flex bg-blue-600 text-white items-center justify-center h-12 px-10 font-bold text-lg tracking-wide transition duration-200 rounded-full shadow-lg bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Voir plus de temoignages
          </NavLink>
        </div>
        <Faq/>
        <div className='mt-3 flex justify-center'>
          <NavLink
            to={navlinks[0].link}
            className="inline-flex bg-blue-600 text-white items-center justify-center h-12 px-10 font-bold text-lg tracking-wide transition duration-200 rounded-full shadow-lg bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Voir plus 
          </NavLink>
        </div>
        <Soubscribe/>
    </>
  )
}

export default index