import React from 'react';
import { motion } from 'framer-motion'; // Assuming you are using framer-motion for animation

const ItemNavDestop = ({ isActive, navItems, theme, isHovered, handleNavActive }) => {

   const styleNav = (item) => {
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

      return {
         itemStyle: theme === 'dark' ? darkThemeItemStyle : lightThemeItemStyle,
         hoverStyle: theme === 'dark' ? commonHoverStyle : commonLightHoverStyle,
         iconStyle: theme === 'dark' ? darkThemeIconStyle : lightThemeIconStyle,
      };
   };

   return (
      <>
         {navItems.map((item, i) => {
            const { itemStyle, hoverStyle, iconStyle } = styleNav(item);

            return (
               <li
                  key={i}
                  className={`flex items-center text-gray-500 space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${itemStyle} ${hoverStyle}`}
                  onClick={() => handleNavActive(item.path)}
               >
                  <span className={`text-lg font-bold ${iconStyle}`}>
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
      </>
   );
};

export default ItemNavDestop;
