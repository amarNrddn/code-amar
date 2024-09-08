import React, { useState } from 'react'
import { navItems } from '../../contans/itemsNav'
import { useNavigate } from 'react-router-dom';

import Profile from '../atoms/Profile';
import TogleDarkMode from '../atoms/TogleDarkMode';

import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

import { useTheme } from '../../contexts/ThemeProvider';
import TogleTheme from '../atoms/TogleTheme';

const NavMobile = () => {
   const navigate = useNavigate()
   const [togle, setTogle] = useState(false);
   const [active, setActive] = useState('/')

   const {theme} = useTheme()

   const handleNavigation = (path) => {
      if (active !== path) {
         setActive(path)
         navigate(path)
         setTogle(false)
      }
   }

   return (
      <nav className={`px-3 py-3 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black' } md:hidden`}>
         <div className="flex justify-between items-center">
            <Profile />
            <div className="flex items-center gap-3">
               {/* <TogleDarkMode /> */}
               <TogleTheme />
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
            </div>

            <div className={`${togle ? "flex " : "hidden"} px-3 z-50 bg-primary fixed top-16 left-0  my-2 min-w-full bg-white shadow-md navtrantition ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black' }`}>
               {togle ? (
                  <div className='w-full'>
                     <ul>
                        {navItems.map((item, i) => (
                           <li
                              key={i}
                              className={`text-lg flex items-center gap-2 mb-4 pl-2 ${active === item.path ? 'bg-gray-500 py-2 rounded-md' : ''}`}
                              onClick={() => handleNavigation(item.path)}
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