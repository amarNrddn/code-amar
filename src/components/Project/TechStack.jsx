import React from 'react'
import { useSelector } from 'react-redux'
import { github } from '../../assets'

const TechStack = () => {
   const techStack = useSelector((state) => state.project.project)

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
                  className='w-5'
                  alt="github"
               />
            <p className='text-gray-500 text-sm'>Source Code</p>
         </a>
      </button>
      </div >
   )
}

export default TechStack