import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Loading from '../atoms/Loading'
import RouteHome from './RouteHome'

const Home = React.lazy(() => import('../pages/Home'))
const RouteAbout = React.lazy(() => import('./RouteAbout'))

const RouteApp = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={
               <Suspense fallback={<Loading />} >
                  <Home />
               </Suspense>
            } />

            <Route path='/*' element={
               <Suspense fallback={<Loading />}>
                  <RouteHome />
               </Suspense>
            } />
            <Route path='/about' element={
               <Suspense fallback={<Loading />} >
                  <RouteAbout />
               </Suspense>
            } />
         </Route>
      </Routes>
   )
}

export default RouteApp
