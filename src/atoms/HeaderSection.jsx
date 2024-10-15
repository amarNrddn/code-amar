import React from 'react'

const HeaderSection = ({ children }) => {
   return (
      <div className='flex items-center text-xl font-semibold gap-3 text-gray-600'>
         {children}
      </div>
   )
}

export default HeaderSection