import React from 'react'
import { navItems } from '../../contans/itemsNav'
import NavMobile from './NavMobile'

const Navbar = () => {
   return (
      <nav>
         
         <div className="md:hidden">
            <NavMobile />
         </div>
      </nav>
   )
}

export default Navbar