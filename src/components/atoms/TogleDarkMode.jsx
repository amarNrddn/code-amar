import React, { useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { CiLight } from "react-icons/ci";

const TogleDarkMode = () => {
   const [isDarkMode, setIsDarkMode] = useState(false)

   const toggleTheme = () => {
      setIsDarkMode(!isDarkMode)
   }

   useEffect(() => {
      if (isDarkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [isDarkMode])

   useEffect(() => {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
   }, [])

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
         setIsDarkMode(savedTheme === 'dark')
      }
   }, [])

   return (
      <button onClick={toggleTheme}>
         {isDarkMode ? (
            <CiLight />
         ) : (
            <MdDarkMode />
         )}
      </button>

   )
}

export default TogleDarkMode