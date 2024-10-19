import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../atoms/Loading'

const Blog = React.lazy(() => import('../pages/Blog'))

const RouteBlog = () => {
   return (
      <Routes>
         <Route path='/' element={
            <Suspense fallback={<Loading />}>
               <Blog />             
            </Suspense>
         } />
      </Routes>
   )
}

export default RouteBlog