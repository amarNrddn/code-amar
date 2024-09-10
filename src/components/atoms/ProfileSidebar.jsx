import React from 'react'
import { motion } from 'framer-motion'
import { navprofil } from '../../assets'

const ProfileSidebar = ({isHovered}) => {
   return (
      <div className="flex items-center space-x-4 ">
         <img src={navprofil} alt="Profile" className="rounded-full w-10 h-10 object-cover" />
         <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="whitespace-nowrap"
         >
            {/* Amar Nuruddin */}
         </motion.span>
      </div>
   )
}

export default ProfileSidebar