import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import RouteAbout from './RouteAbout'
import GuardRoute from '../components/guardRoute'
import About from '../components/About/About'
import Home from '../components/Home/Home'

const RouteApp = () => {
   return (
      // <Router>
      <Routes>
         <Route path='/' element={<GuardRoute />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<RouteAbout />} />
         </Route>
      </Routes >
      // </Router>

   )
}

export default RouteApp