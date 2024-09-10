import React from 'react'
import { navItems } from '../../contans/itemsNav'
import NavMobile from './NavMobile'
import NavDestop from './NavDestop'

const Navbar = () => {
   return (
      <nav>
         <div className="hidden md:block">
            <NavDestop />
         </div>
         <NavMobile />
      </nav>
   )
}

export default Navbar