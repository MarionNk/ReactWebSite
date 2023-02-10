import React from 'react'
import Navbar from './../../Components/Navbar'
import Prices from './../../Components/Prices'
import Footer from './../../Components/Footer'
import PricesDetails from './../../Components/Prices/PricesDetails'

const index = () => {
  return (
    <>
        <Navbar/>
        <div className='mt-32'></div>
        <Prices/>
        <PricesDetails/>
        <Footer/>
    </>
  )
}

export default index