import React from 'react'
import { Routes,Route } from 'react-router'
import { useNavigate } from 'react-router'
import {navlinks} from './../Constants/index.js'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Prices from './Prices'
import Services from './Services'
import Pay from './../Components/Prices/Pay'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import ScrollToTop from '../Helpers/ScrollToTop.jsx'

const index = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path={navlinks[1].link} element={<About/>}/>
          <Route exact path={navlinks[4].link} element={<Contact/>}/>
          <Route exact path={navlinks[3].link} element={<Prices/>}/>
          <Route exact path={navlinks[2].link} element={<Services/>}/>
          <Route path={navlinks[3].link+"/subscribe"} element={<Pay />} />
          <Route path={navlinks[3].link+navlinks[3].link+"/subscribe"} element={<Pay />} />
          <Route exact path={"/*"} element={<><h1 className="text-4xl text-gray-800 font-bold text-center py-16">Oups! Page Not Found</h1></>}/>
      </Routes>
    </div>
  )
}

export default index