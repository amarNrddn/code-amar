import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeProvider'
import { themeDark, themeLight } from '../contans/styles'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
   const { theme } = useTheme()
   return (
      <div className={`md:flex md:justify-center ${theme === 'dark' ? `${themeDark.className}` : `${themeLight.className}`}`}>
         <Navbar />
         <div className="px-3 min-h-screen relative md:max-w-xl md:flex md:justify-center md:items-center lg:w-3xl">
            <Outlet />
         </div>
      </div>
   )
}

export default Layout