import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeProvider'
import { themeDark, themeLight } from '../contans/styles'
import { hiddenNav } from '../contans/handleRoot'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
   const { theme } = useTheme()
   const location = useLocation()
   const hiddenNavPath = hiddenNav.some(path => location.pathname.includes(path))
   return (
      <div className={`md:flex md:justify-center ${theme === 'dark' ? `${themeDark.className}` : `${themeLight.className}`}`}>
         {!hiddenNavPath && <Navbar />}
         {hiddenNavPath ? (
            <div className="px-5 min-h-screen relative md:max-w-4xl md:flex md:justify-center md:items-center lg:w-3xl">
               <Outlet />
            </div>
         ) : (
            <div className="px-5 min-h-screen relative md:max-w-xl md:flex md:justify-center md:items-center lg:w-3xl">
               <Outlet />
            </div>
         )}
      </div>
   )
}

export default Layout