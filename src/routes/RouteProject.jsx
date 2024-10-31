import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../atoms/Loading'

const Project = React.lazy(() => import('../pages/Project'))
const ViewProject = React.lazy(() => import('../components/Project/ViewProject'))

const RouteProject = () => {
   return (
      <Routes>
         <Route path='/' element={
            <Suspense>
               <Project />
            </Suspense>
         } />

         <Route path='project/:slug' element={
            <Suspense>
               <ViewProject fallback={<Loading />} />
            </Suspense>
         } />
      </Routes>
   )
}

export default RouteProject