import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../../../Components/Navbar'
import Prices from '../../../Components/Prices'
import Footer from '../../../Components/Footer'
import SmallHero from '../../../Components/SmallHero'
import PricesDetails from '../../../Components/Prices/PricesDetails'
import Pay from '../../../Components/Prices/Pay'

const index = () => {
  return (
    <>
        <div className='mt-20'></div>
        <SmallHero param1="lorem ipsum lorem ipsum lorem ipsum." param2="Nos tarifs"/>
        <Prices/>
        <PricesDetails/>
        
    </>
  )
}

export default index