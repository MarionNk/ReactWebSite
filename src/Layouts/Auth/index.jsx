import React from 'react'
import { Route, Routes } from 'react-router'
import { otherlinks } from '../../Constants'
import Login from './Login'
import Register from './Register'

const index = () => {
  return (
    <Routes>
        <Route exact path={otherlinks[2].link} element={<Login/>}/>
        <Route exact path={otherlinks[3].link} element={<Register/>}/>
    </Routes>
  )
}

export default index