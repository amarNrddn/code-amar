import React from 'react'
import { useSelector } from 'react-redux'

const Feature = () => {
   const features = useSelector((state) => state.project.project)
   return (
      <>
         {features.features === 0 ? (
            ""
         ) : (
            <div className='mt-5'>
               <h1 className='font-bold text-lg'>Features</h1>
               <div className="flex flex-col gap-9 mt-5">
                  {features.features.map((item) => (
                     <div key={item.id} className="">
                        <h3 className='font-semibold mb-2'>{item.title}</h3>
                        <p>{item.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </>
   )
}

export default Feature