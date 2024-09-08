import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'

const RouteHome = () => {
   return (
     <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
   )
}

export default RouteHome