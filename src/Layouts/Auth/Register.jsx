import React from 'react'
import SmallHero from '../../Components/SmallHero'
import FormulaireCandidat from '../../Components/FormulaireCandidat'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import ScrollToTop from '../../Helpers/ScrollToTop'

const Register = () => {
  return (
    <div>
        <Navbar/>
        <ScrollToTop/>
        <div className=' mt-12'></div>
        <SmallHero param1={"lorem ipsum lorem ipsum lorem."}  param2={"Enregistres toi sur Studefly"}/>
        <FormulaireCandidat/>
        <Footer/>
    </div>
  )
}

export default Register