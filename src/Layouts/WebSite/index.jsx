import React from 'react'
import { Route,Routes } from 'react-router'
import { navlinks } from '../../Constants'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Home from './Home'
import About from './About'
import Services from './Services'
import Prices from './Prices'
import Contact from './Contact'
import Pay from '../../Components/Prices/Pay'
import ScrollToTop from '../../Helpers/ScrollToTop'

const index = () => {
  return (
    <>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
            <Route exact path="*" element={<Home/>}/>
            <Route exact path={navlinks[1].link} element={<About/>}/>
            <Route exact path={navlinks[2].link} element={<Services/>}/>
            <Route exact path={navlinks[3].link} element={<Prices/>}/>
            <Route exact path={navlinks[4].link} element={<Contact/>}/>

            <Route path={navlinks[3].link+"/subscribe"} element={<Pay />} />
            <Route path={navlinks[3].link+navlinks[3].link+"/subscribe"} element={<Pay />} />
            {/* <Route exact path={"*"} element={<><h1 className="text-4xl text-gray-800 font-bold text-center py-16">Oups! Page Not Found</h1></>}/>
            */}
        </Routes>
        <Footer/>
    </>
  )
}

export default index