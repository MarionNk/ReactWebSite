import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Layouts'
import Navbar from './Components/Navbar'

const App = () => 
(
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
)

export default App