import React from 'react'
import Navbar from './../../Components/Navbar'
import Team from './../../Components/Team'
import Footer from './../../Components/Footer'
import Features from './../../Components/Features'
import TrustedUsers from './../../Components/TrustedUsers'

const index = () => {
  return (
    <>
        <Navbar/>
        <Team/>
        <Features/>
        <TrustedUsers/>
        <Footer/>
    </>
  )
}

export default index