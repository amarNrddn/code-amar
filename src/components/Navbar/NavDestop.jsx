import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../../contans/itemsNav';
import { useTheme } from '../../contexts/ThemeProvider';
import { themeDark, themeLight } from '../../contans/styles';
import ProfileSidebar from '../../atoms/ProfileSidebar';
import { useNavigate } from 'react-router-dom';
import './style.css'

const NavDestop = () => {
   const navigate = useNavigate()
   const { theme } = useTheme();
   const [isHovered, setIsHovered] = useState(false);
   const [isActive, setIsActive] = useState('/')

   const handleNavActive = (path) => {
      navigate(path)
      setIsActive(path)
   }

   const borderDark = theme === 'dark' ? `bg-gray-500` : `bg-gray-200`
   const containerNav = theme === 'dark' ? `${themeDark.className} sidebar-shadow` : `${themeLight.className}`

   return (
      <nav className="absolute left-0 ">
         <motion.div
            className={`h-screen ${containerNav} rounded-tr-xl rounded-br-xl shadow-xl relative ${isHovered ? '' : 'pt-4'} `}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ width: isHovered ? 200 : 64 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ overflow: 'hidden' }}
         >
            <div className='relative' >
               <div className={`${isHovered ? '' : 'flex flex-col items-center '}`}>
                  <ProfileSidebar isHovered={isHovered} />
               </div>

               <div className="px-4">
                  <div className={`w-full h-0.5 rounded-lg mt-2 ${borderDark}`}></div>
               </div>

               <ul className={`space-y-4 ${isHovered ? 'px-4' : 'px-3'} pt-4`}>
                  {navItems.map((item, i) => {
                     const isActiveItem = isActive === item.path;
                     const darkThemeItemStyle = isHovered
                        ? isActiveItem
                           ? 'px-2 py-1 bg-[#444] pl-3 rounded-md text-white'
                           : 'text-gray-500'
                        : '';

                     const lightThemeItemStyle = isHovered
                        ? isActiveItem
                           ? 'px-2 py-1 bg-gray-200 pl-3 rounded-md text-gray-500'
                           : ''
                        : '';

                     const commonHoverStyle = isHovered
                        ? 'px-2 py-1 hover:bg-[#444] hover:pl-3 rounded-md'
                        : '';

                     const commonLightHoverStyle = isHovered
                        ? 'px-2 py-1 hover:bg-gray-200 hover:pl-3 rounded-md'
                        : '';

                     const darkThemeIconStyle = isHovered
                        ? isActiveItem
                           ? 'text-white'
                           : ''
                        : isActiveItem
                           ? 'p-2 bg-[#333] text-white rounded-full'
                           : 'p-2 bg-[#333] text-gray-500 rounded-full';

                     const lightThemeIconStyle = isHovered
                        ? ''
                        : isActiveItem
                           ? 'p-2 bg-gray-200 text-black rounded-full'
                           : 'p-2 bg-gray-200 rounded-full';

                     return (
                        <li
                           key={i}
                           className={`flex items-center text-gray-500 space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${theme === 'dark' ? darkThemeItemStyle : lightThemeItemStyle}  ${theme === 'dark' ? commonHoverStyle : commonLightHoverStyle}`}
                           onClick={() => handleNavActive(item.path)}
                        >
                           <span
                              className={`text-lg font-bold ${theme === 'dark' ? darkThemeIconStyle : lightThemeIconStyle}`}
                           >
                              {item.icon}
                           </span>

                           <motion.span
                              initial={{ opacity: 0, x: 100 }}
                              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 100 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className="whitespace-nowrap"
                           >
                              {item.navigation}
                           </motion.span>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </motion.div>
      </nav>
   );
};

export default NavDestop;
