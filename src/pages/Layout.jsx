import React from 'react'
import NavMobile from '../components/Navbar/NavMobile'
import { Outlet } from 'react-router-dom'

const Layout = () => {
   return (
      <div className='md:flex md:justify-center'>
         <NavMobile />
         <div className="px-3 md:max-w-xl md:flex md:justify-center md:items-center lg:max-w-3xl">
            <Outlet />
         </div>
      </div>
   )
}

export default Layout