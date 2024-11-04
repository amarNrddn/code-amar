import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Dashboard = React.lazy(() => import('../pages/Dashboard'))

const RouteDashboard = () => {
   return (
      <Routes>
         <Route path='/' element={
            <Suspense>
               <Dashboard />
            </Suspense>
         } />
      </Routes>
   )
}

export default RouteDashboard