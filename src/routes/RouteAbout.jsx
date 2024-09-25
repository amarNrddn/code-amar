import React from 'react'
import { Route, Routes } from 'react-router-dom'

const About = React.lazy(() => import("../pages/About"))

const RouteAbout = () => {
   return (
      <Routes>
         <Route path='/' element={<About />} />
      </Routes>
   )
}

export default RouteAbout