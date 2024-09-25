import React from 'react'

const CardArticel = ({ articels }) => {

   return (
      <>
         {articels.map((item) => {
            return (
               <div key={item.id} className="w-52 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                     src={`http://localhost:8888/${item.thumbnail}`}
                     alt="thumbnail"
                     className="w-full h-28 rounded-md object-cover"
                  />
                  <div className="mt-2">
                     <h2 className="font-semibold text-sm overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">{item.title}</h2>
                     <p className="text-gray-400 text-xs">August 04, 2024</p>
                  </div>
               </div>
            )
         })}
      </>
   )
}

export default CardArticel