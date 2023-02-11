import React from 'react'
import { Route, Routes } from 'react-router'
import { otherlinks } from '../../Constants'
import Login from './Login'

const index = () => {
  return (
    <Routes>
        <Route exact path={otherlinks[2].link} element={<Login/>}/>
    </Routes>
  )
}

export default index