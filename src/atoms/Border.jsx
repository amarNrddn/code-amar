import React from 'react'
import { useTheme } from '../contexts/ThemeProvider'

const Border = ({ className = '' }) => {
   const {theme} = useTheme()
   return (
      <div className={`w-full h-[1px] bg-gray-400 ${className} ${theme === 'dark' ? 'bg-gray-800' : ''}`}></div>
   )
}

export default Border