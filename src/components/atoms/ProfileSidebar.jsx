import React from 'react'
import { motion } from 'framer-motion'
import { navprofil } from '../../assets'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'

const ProfileSidebar = ({ isHovered }) => {
   return (
      <div className="">
         {isHovered ? (
            <div className="">
               <div className="pl-4 flex items-center ">
                  <div className="mt-4 max-w-[100px] px-2 py-1 flex items-center gap-1 border-2 rounded-xl">
                     <div className="w-2 h-2 bg-green-600 rounded-full animate-pulseDot"></div>
                     <p className='text-xs'>Hire me.</p>
                  </div>
               </div>
               <motion.div
                  animate={{ width: isHovered ? 200 : 60 }}
                  className="flex flex-col justify-center items-center pt-5 border-black"
               >
                  <motion.img
                     initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                     animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                     transition={{ duration: 0.5, ease: 'easeInOut' }}
                     src={navprofil}
                     alt="Profile"
                     className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="mt-2 flex items-center">
                     <span className="whitespace-nowrap text-lg font-semibold">Amar Nuruddin</span>
                     <TbRosetteDiscountCheckFilled className='text-cyan-500 text-2xl ml-1' />
                  </div>
               </motion.div>
            </div>
         ) : (
            <img src={navprofil} alt="Profile" className="rounded-full w-10 h-10 object-cover" />
         )}
      </div>
   )
}

export default ProfileSidebar