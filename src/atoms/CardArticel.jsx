import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../utils/fetch'
import { configs } from '../configs'


const CardArticel = ({ articels }) => {
   const navigate = useNavigate()
   const [blog, setBlog] = useState([])

   const getOneBlog = async (id) => {
      try {
         const getBlog = await getApi(`blog/${id}`)
         setBlog(getBlog)
         navigate(`artikel/${id}`)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         {articels.map((item) => {
            return (
               <div
                  key={item.id}
                  className="w-52 rounded-lg overflow-hidden flex-shrink-0 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95"
                  onClick={() => getOneBlog(item.id)}
               >
                  <img
                     src={`${configs.api_host_dev}/${item.thumbnail}`}
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