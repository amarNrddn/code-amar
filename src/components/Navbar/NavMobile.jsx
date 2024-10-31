import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Profile from '../../atoms/Profile';
import TogleTheme from '../../atoms/TogleTheme';

import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

import { navItems } from '../../contans/itemsNav'
import { useTheme } from '../../contexts/ThemeProvider';
import { themeDark, themeLight } from '../../contans/styles';

const NavMobile = () => {
   const navigate = useNavigate()
   const [togle, setTogle] = useState(false);
   const [active, setActive] = useState('/')
   const navRef = useRef(null);

   const { theme } = useTheme()

   useEffect(() => {
      const savedActivePath = localStorage.getItem('activeNavPath');
      if (savedActivePath) {
         setActive(savedActivePath);
      }
   }, [])

   const handleNavigation = (path) => {
      if (active !== path) {
         setActive(path)
         navigate(path)
         localStorage.setItem('activeNavPath', path);
         setTogle(false)
      }
   }

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (navRef.current && !navRef.current.contains(event.target)) {
            setTogle(false); // Menutup navbar jika klik di luar
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);


   const containerNav = theme === 'dark' ? themeDark.className : themeLight.className

   return (
      <nav className={`px-3 py-3 ${containerNav} md:hidden`}>
         <div className="flex justify-between items-center">
            <Profile />
            <div className="flex items-center gap-3">
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

            <div
               ref={navRef}
               className={`${togle ? "flex " : "hidden"} px-3 z-50 bg-primary fixed top-16 left-0  my-2 min-w-full shadow-md navtrantition ${theme === 'dark' ? `${themeDark.className}` : `${themeLight.className}`}`}>
               {togle ? (
                  <div className='w-full'>
                     <ul>
                        {navItems.map((item, i) => (
                           <li
                              key={i}
                              className={`text-lg flex items-center gap-2 mb-4 pl-2 ${theme === 'dark' ? active === item.path ? 'bg-darkPrimary py-2 rounded-md' : '' : active === item.path ? 'bg-gray-200 py-2 rounded-md' : ''} `}
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