import React from 'react'
import { useSelector } from 'react-redux'
import { github } from '../../assets'
import { useTheme } from '../../contexts/ThemeProvider'

const TechStack = () => {
   const techStack = useSelector((state) => state.project.project)
   const { theme } = useTheme()

   return (
      <div className="w-full flex justify-between items-center mb-5">
         <div className="">
            {techStack.techstacks.map((item) => (
               <span
                  key={item.id}
                  className='mr-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-lg mb-2 cursor-pointer'
               >
                  {item.techstack}
               </span>
            ))}
         </div>

         <button className="">
            <a className='flex items-center gap-2' href={techStack.linksourcode} target='_blank' rel="noreferrer">
               <img
                  src={github}
                  className={`w-5 ${theme === 'dark' ? 'rounded-full bg-white' : ''}`}
                  alt="github"
               />
               <p className='text-gray-500 text-sm'>Source Code</p>
            </a>
         </button>
      </div >
   )
}

export default TechStack