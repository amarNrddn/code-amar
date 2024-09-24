import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'

const Home = React.lazy(() => import('../pages/Home'))
const RouteAbout = React.lazy(() => import('./RouteAbout'))

const RouteApp = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={
               <Suspense >
                  <Home />
               </Suspense>
            } />
            <Route path='/about' element={
               <Suspense >
                  <RouteAbout />
               </Suspense>
            } />
         </Route>
      </Routes>
   )
}

export default RouteApp
