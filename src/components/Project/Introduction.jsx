import React from 'react'
import { useSelector } from 'react-redux'

const Introduction = () => {
   const introduction = useSelector((state) => state.project.project)
   return (
      <>
         {introduction.introduction === "" ? (
            ""
         ) : (
            <div className='mt-9'>
               <h1 className='font-bold text-lg'>Introduction</h1>
               <p className="mt-4 text-base leading-loose">
                  {introduction.introduction}
               </p>
            </div>
         )}
      </>
   )
}

export default Introduction