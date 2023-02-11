import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Layouts'
import { otherlinks } from './Constants'
import Login from './Layouts/Auth/Login';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => 
(
  <>
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
  </>
)

export default App