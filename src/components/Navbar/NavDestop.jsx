
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { navItems } from '../../contans/itemsNav';
// import { useTheme } from '../../contexts/ThemeProvider';
// import { themeDark, themeLight } from '../../contans/styles';
// import Profile from '../atoms/Profile';
// import ProfileSidebar from '../atoms/ProfileSidebar';

// const NavDestop = () => {
//    const { theme } = useTheme();
//    const [isHovered, setIsHovered] = useState(false);

//    return (
//       <nav className="absolute left-0">
//          <motion.div
//             className={`h-screen ${theme === 'dark' ? `${themeDark.className}` : `${themeLight.className}`} shadow-md p-4`}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//             animate={{ width: isHovered ? 192 : 64 }} 
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             style={{ overflow: 'hidden' }}
//          >
//             <ul className="space-y-4">
//                <ProfileSidebar />
//                {navItems.map((item, i) => (
//                   <li key={i} className="flex items-center space-x-4 cursor-pointer">
//                      <span className="text-2xl">{item.icon}</span>
//                      <motion.span
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: isHovered ? 1 : 0 }}
//                         transition={{ duration: 0.5, ease: 'easeInOut' }}
//                         className="whitespace-nowrap"
//                      >
//                         {item.navigation}
//                      </motion.span>
//                   </li>
//                ))}
//             </ul>
//          </motion.div>
//       </nav>
//    );
// };

// export default NavDestop;







import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../../contans/itemsNav';
import { useTheme } from '../../contexts/ThemeProvider';
import { themeDark, themeLight } from '../../contans/styles';
import ProfileSidebar from '../atoms/ProfileSidebar';

const NavDestop = () => {
   const { theme } = useTheme();
   const [isHovered, setIsHovered] = useState(false);

   return (
      <nav className="absolute left-0">
         <motion.div
            className={`h-screen ${theme === 'dark' ? `${themeDark.className}` : `${themeLight.className}`} shadow-md relative`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ width: isHovered ? 192 : 64 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ overflow: 'hidden' }}
         >
            <div className=" absolute  flex items-center flex-col">
               <div className="">
                  <ProfileSidebar isHovered={isHovered} />
               </div>
               <ul className="space-y-4">
                  {navItems.map((item, i) => (
                     <li key={i} className="flex items-center space-x-4 cursor-pointer">
                        <span className="text-xl">{item.icon}</span>
                        <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: isHovered ? 1 : 0 }}
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
