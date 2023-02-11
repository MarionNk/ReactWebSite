import React from 'react'
import Navbar from './../../Components/Navbar'
import Team from './../../Components/Team'
import Footer from './../../Components/Footer'
import Features from './../../Components/Features'
import TrustedUsers from './../../Components/TrustedUsers'
import SmallHero from './../../Components/SmallHero'

const index = () => {
  return (
    <>
        <Navbar/>
        <div className="mt-20 "></div>
        <SmallHero param1="Lorem ipsum dolor, sit amet consectetur adipisicing." param2="A propos de nous"/>
        <Team/>
        <Features/>
        <TrustedUsers/>
        <Footer/>
    </>
  )
}

export default index