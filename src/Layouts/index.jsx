import React from 'react'
import { Routes,Route } from 'react-router'
import WebSite from './WebSite'
import Auth from './Auth'
import CandidateLayout from './CandidateLayout'
import { otherlinks } from '../Constants'

const index = () => {
  return (
    <>
        <div className="overflow-x-hidden">
            <Routes>
                <Route exact path="/*" element={<WebSite/>}/>
                <Route exact path="/clayout" element={<CandidateLayout/>}/>
                <Route exact path={otherlinks[1].link+"/*"} element={<Auth/>}/>            
                {/* <Route exact path={"/*"} element={<><h1 className="text-4xl text-gray-800 font-bold text-center py-16">Oups! Page Not Found</h1></>}/> */}
            </Routes>
        </div>
    </>
  )
}

export default index