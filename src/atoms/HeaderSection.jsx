import React from 'react'

const HeaderSection = ({ children, className = '' }) => {
   return (
      <div className={`flex items-center text-xl font-semibold gap-3 text-gray-600 ${className}`}>
         {children}
      </div>
   )
}

export default HeaderSection