import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RouteAbout from './RouteAbout'
import Layout from '../pages/Layout'
import Home from '../pages/Home'

const RouteApp = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route index element={<Home />   } />
            <Route path='/about' element={<RouteAbout />} />
         </Route>
      </Routes >

   )
}

export default RouteApp