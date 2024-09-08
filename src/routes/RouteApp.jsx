import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RouteAbout from './RouteAbout'
import Home from '../components/Home/Home'
import Layout from '../pages/Layout'

const RouteApp = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<RouteAbout />} />
         </Route>
      </Routes >

   )
}

export default RouteApp