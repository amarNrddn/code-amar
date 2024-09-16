import React from 'react'
import NavMobile from './NavMobile'
import NavDestop from './NavDestop'

const Navbar = () => {
   return (
      <nav>
         <div className="hidden md:block md:fixed md:left-0 md:z-10">
            <NavDestop />
         </div>
         <NavMobile />
      </nav>
   )
}

export default Navbar