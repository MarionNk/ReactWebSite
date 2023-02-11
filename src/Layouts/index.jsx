import React from 'react'
import { Routes,Route } from 'react-router'
import {navlinks} from './../Constants/index.js'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Prices from './Prices'
import Services from './Services'
import Pay from './../Components/Prices/Pay'

const index = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path={"/"+navlinks[1].id} element={<About/>}/>
        <Route exact path={"/"+navlinks[4].id} element={<Contact/>}/>
        <Route exact path={"/"+navlinks[3].id} element={<Prices/>}/>
        <Route exact path={"/"+navlinks[2].id} element={<Services/>}/>
        <Route path={navlinks[3].id+"/subscribe"} element={<Pay />} />
        <Route path={navlinks[3].id+"/"+navlinks[3].id+"/subscribe"} element={<Pay />} />
        <Route exact path={"/*"} element={<><h1 className="text-4xl text-gray-800 font-bold text-center py-16">Oups! Page Not Found</h1></>}/>
    </Routes>
  )
}

export default index