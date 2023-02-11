import React from 'react'
import Navbar from './../../Components/Navbar'
import Footer from './../../Components/Footer'
import SmallHero from './../../Components/SmallHero'
import AllServices from './../../Components/Services/AllServices'

const index = () => {
  return (
    <>
        <div className='mt-20'></div>
        <SmallHero param1="lorem ipsum lorem ipsum lorem ipsum" param2="Nos Services"/>
        <AllServices/>
    </>
  )
}

export default index