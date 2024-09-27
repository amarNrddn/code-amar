import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../atoms/Loading'

const Home = React.lazy(() => import('../pages/Home'))
const DetailArticel = React.lazy(() => import('../components/DetailArticel/DetailArticel'))

const RouteHome = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      } />
      <Route path='/artikel/:id' element={
        <Suspense>
          <DetailArticel fallback={<Loading />} />
        </Suspense>
      } />
    </Routes>
  )
}

export default RouteHome