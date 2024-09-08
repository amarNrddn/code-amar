import React, { useState } from 'react'
import { navItems } from '../../contans/itemsNav'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import Profile from '../atoms/Profile';
import TogleDarkMode from '../atoms/TogleDarkMode';
import { useNavigate } from 'react-router-dom';

const NavMobile = () => {
   const navigate = useNavigate()
   const [togle, setTogle] = useState(false);
   const [active, setActive] = useState('/')

   return (
      <nav className='px-3 py-3'>
         <div className="flex justify-between items-center">
            <Profile />
            <TogleDarkMode />
            {togle ? (
               <Cross2Icon
                  className='w-7 h-7 transition-transform duration-300 ease-in-out transform'
                  onClick={() => setTogle(!togle)}
               />
            ) : (
               <HamburgerMenuIcon
                  className='w-7 h-7 transition-transform duration-300 ease-in-out transform'
                  onClick={() => setTogle(!togle)}
               />
            )}

            <div className={`${togle ? "flex " : "hidden"} px-3 z-50 bg-primary fixed top-16 left-0  my-2 min-w-full bg-white shadow-md navtrantition`}>
               {togle ? (
                  <div className='w-full bg-white'>
                     <ul>
                        {navItems.map((item, i) => (
                           <li
                              key={i}
                              className={`text-lg flex items-center gap-2 mb-4 pl-2 ${active === item.path ? 'bg-gray-500 py-2 rounded-md' : ''}`}
                              onClick={() => {
                                 if (active !== item.path) {
                                    setActive(item.path);
                                    navigate(item.path);
                                 }
                              }}
                           >
                              <p className='text-2xl font-semibold'>{item.icon}</p>
                              <p className='text-lg'>{item.navigation}</p>
                           </li>
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