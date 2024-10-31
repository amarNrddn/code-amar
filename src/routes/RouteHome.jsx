import React, { Suspense, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loading from '../atoms/Loading'
import LoadingBar from 'react-top-loading-bar';
import { useTheme } from '../contexts/ThemeProvider';

const Home = React.lazy(() => import('../pages/Home'))
const ViewBlog = React.lazy(() => import('../components/Blog/ViewBlog'))

const RouteHome = () => {
  const location = useLocation()
  const loadingBarRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart()
      setTimeout(() => {
        loadingBarRef.current.complete()
      }, 1000)
    }
  }, [location]);

  return (
    <>
      <LoadingBar
        color={theme === 'dark' ? '#29d' : '#A9E5BB'}
        ref={loadingBarRef}
        shadow={theme === 'dark' ? '0 0 10px #29d' : '0 0 10px #f11946'}
        height={4}
        transitionTime={500} />

      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path='artikel/:slug' element={
          <Suspense>
            <ViewBlog fallback={<Loading />} />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default RouteHome