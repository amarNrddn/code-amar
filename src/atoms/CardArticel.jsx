import React from 'react'
import { thumbnailcard } from '../assets'

const CardArticel = () => {
   return (
      <div className="w-52 bg-white rounded-lg overflow-hidden flex-shrink-0">
         <img
            src={thumbnailcard}
            alt="thumbnail"
            className="w-full h-28 rounded-md object-cover"
         />
         <div className="">
            <h2 className=" font-semibold  line-clamp-1 text-gray-500">Membatasi lebar maksimum dari card agar konsisten. Kamu bisa menyesuaikan</h2>
            <p className="text-gray-400 text-xs">August 04, 2024</p>
         </div>
      </div>
   )
}

export default CardArticel