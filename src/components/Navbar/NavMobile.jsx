import React, { useState } from 'react'
import { navItems } from '../../contans/itemsNav'
import { navprofil } from '../../assets'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

const NavMobile = () => {
   const [togle, setTogle] = useState(false);

   return (
      <nav className='px-3 py-3'>
         <div className="flex justify-between items-center">
            <div className="flex items-center">
               <img className='object-cover rounded-full w-12 h-12' src={navprofil} alt='navprofile' />
               <h3 className='text-xl font-bold ml-2'>Amar Nuruddin</h3>
               <TbRosetteDiscountCheckFilled className='text-cyan-500 text-2xl ml-1' />
            </div>

            {togle ? (
               <Cross2Icon
                  className='w-7 h-7'
                  onClick={() => setTogle(!togle)}
               />
            ) : (
               <HamburgerMenuIcon
                  className='w-7 h-7'
                  onClick={() => setTogle(!togle)}
               />
            )}

            <div className={`${togle ? "flex" : "hidden"} px-3 z-50 bg-primary fixed top-16 left-0  my-2 min-w-full bg-white shadow-md navtrantition`}>
               {togle ? (
                  <div className='w-full bg-white'>
                     <ul>
                        {navItems.map((item, i) => (
                           <li key={i}>{item.navigation}</li>
                        ))}
                     </ul>
                  </div>
               ) : ("")}
            </div>

         </div>
      </nav>
   )
}

export default NavMobile