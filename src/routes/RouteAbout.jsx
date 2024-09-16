import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'

const RouteAbout = () => {
   return (
      <Routes>
         <Route path='/' element={<About />} />
      </Routes>
   )
}

export default RouteAbout