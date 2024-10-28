import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Project = React.lazy(() => import('../pages/Project'))

const RouteProject = () => {
   return (
      <Routes>
         <Route path='/' element={
            <Suspense>
               <Project />
            </Suspense>
         } />
      </Routes>
   )
}

export default RouteProject