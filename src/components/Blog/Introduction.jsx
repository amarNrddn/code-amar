import React from 'react'
import { useSelector } from 'react-redux'

const Introduction = () => {
   const introduction = useSelector((state) => state.articel.data)
   return (
      <>
         {introduction.introduction === "" ? (
            ""
         ) : (
            <div className='mt-9'>
               <h1 className='font-bold'>Introduction</h1>
               <p className="mt-4 text-base">
                  {introduction.introduction}
               </p>
            </div>
         )}
      </>
   )
}

export default Introduction