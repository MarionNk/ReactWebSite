import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Layouts'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => 
(
  <>
      <BrowserRouter>
        <Navbar/>
        <Layouts />
      </BrowserRouter>
      <Footer/>
  </>
)

export default App