import React from 'react'
import { motion } from 'framer-motion'
import { navprofil } from '../assets'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import TogleTheme from './TogleTheme'
import '../components/Navbar/style.css'
import { useTheme } from '../contexts/ThemeProvider'
import { themeDark } from '../contans/styles'

const ProfileSidebar = ({ isHovered }) => {
   const { theme } = useTheme()
   return (
      <>
         {isHovered ? (
            <div className="relative">
               <div className="bgsidebar">
                  <div className={`w-24 h-8 rounded-md ${theme === 'dark' ? themeDark.className : 'bg-white'}`}></div>
               </div>
               <div className="pl-4 flex items-center absolute left-[-4px] top-[-3px]">
                  <div className="mt-4 max-w-[100px] px-2 py-1 flex items-center gap-1 border-2 rounded-xl">
                     <div className="w-2 h-2 bg-green-600 rounded-full animate-pulseDot"></div>
                     <p className='text-xs'>Hire me.</p>
                  </div>
               </div>
               <motion.div
                  animate={{ width: isHovered ? 200 : 60 }}
                  className="relative flex flex-col justify-center items-center pt-14 border-black"
               >
                  <motion.div
                     initial={{ scale: 0.5 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.5 }}
                     className='absolute right-5 top-10'
                  >
                     <TogleTheme />
                  </motion.div>

                  <motion.img
                     initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                     animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                     transition={{ duration: 0.5, ease: 'easeInOut' }}
                     src={navprofil}
                     alt="Profile"
                     className="w-20 h-20 rounded-full object-cover"
                     loading='lazy'
                  />
                  <div className="mt-2 flex items-center">
                     <span className="whitespace-nowrap text-lg font-semibold">Amar Nuruddin</span>
                     <TbRosetteDiscountCheckFilled className='text-cyan-500 text-2xl ml-1' />
                  </div>
                  <p className='text-sm text-gray-600'>@marzkyy</p>
               </motion.div>
            </div>
         ) : (
            <img src={navprofil} alt="Profile" className="rounded-full w-10 h-10 object-cover" loading='lazy' />
         )}
      </>
   )
}

export default ProfileSidebar