import React from 'react'
import { Routes,Route } from 'react-router'
import TestAcceuil from './TestAcceuil'
import FormulaireCandidat from '../../Components/FormulaireCandidat'

const index = () => {
  return (
    <>
        <div className="overflow-x-hidden">
            <Routes>
                <Route exact path="*" element={<TestAcceuil/>}/>
            </Routes>
        </div>
    </>
  )
}

export default index