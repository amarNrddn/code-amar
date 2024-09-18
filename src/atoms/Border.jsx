import React from 'react'

const Border = ({ className = '' }) => {
   return (
      <div className={`w-full h-[1px] bg-gray-400 ${className}`}></div>
   )
}

export default Border