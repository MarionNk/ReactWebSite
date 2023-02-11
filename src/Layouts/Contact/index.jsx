import React from 'react'
import Navbar from './../../Components/Navbar'
import Presentation from './../../Components/Presentation'
import Footer from './../../Components/Footer'
import Contact from './../../Components/Contact'
import SmallHero from './../../Components/SmallHero'

const index = () => {
  return (
        <>
            <div className="mt-20 "></div>
            <SmallHero param1="Nous restons disponible vingt quatre heure sur vingt quatre" param2="Contact Us 24h/24"/>
            <Contact/>
        </>
  )
}

export default index