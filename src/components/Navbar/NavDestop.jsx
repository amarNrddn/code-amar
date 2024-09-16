import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../../contans/itemsNav';
import { useTheme } from '../../contexts/ThemeProvider';
import { themeDark, themeLight } from '../../contans/styles';
import ProfileSidebar from '../../atoms/ProfileSidebar';
import { useNavigate } from 'react-router-dom';


const NavDestop = () => {
   const navigate = useNavigate()
   const { theme } = useTheme();
   const [isHovered, setIsHovered] = useState(false);
   const [isActive, setIsActive] = useState('/')

   const handleNavActive = (path) => {
      navigate(path)
      setIsActive(path)
   }

   return (
      <nav className="absolute left-0 ">
         <motion.div
            className={`h-screen ${theme === 'dark' ? `${themeDark.className}` : `${themeLight.className}`} rounded-tr-xl rounded-br-xl shadow-xl relative ${isHovered ? '' : 'pt-4'} `}
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
                  <div className="w-full h-0.5 rounded-lg bg-gray-200 mt-2"></div>
               </div>

               <ul className={`space-y-4 ${isHovered ? 'px-4' : 'px-3'} pt-4 `}>
                  {navItems.map((item, i) => (
                     <li
                        key={i} className={`flex items-center text-gray-500 space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${isHovered ? `px-2 py-1 hover:bg-gray-200 hover:pl-3 rounded-md ${isActive === item.path ? 'px-2 py-1 bg-gray-200 rounded-md pl-3' : ''}` : ''}`}
                        onClick={() => handleNavActive(item.path)}
                     >
                        <span className={`text-lg font-bold ${isHovered ? '' : 'p-2 bg-gray-200 rounded-full'}`}>{item.icon}</span>
                        <motion.span
                           initial={{ opacity: 0, x: 100 }}
                           animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 100 }}
                           transition={{ duration: 0.5, ease: 'easeInOut' }}
                           className="whitespace-nowrap"
                        >
                           {item.navigation}
                        </motion.span>
                     </li>
                  ))}
               </ul>
            </div>
         </motion.div>
      </nav>
   );
};

export default NavDestop;
