import React from 'react'
import { itemServices } from '../contans/services'
import { useTheme } from '../contexts/ThemeProvider'

const CardService = () => {
   const { theme } = useTheme()
   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itemServices.map((item, i) => (
               <div
                  key={i}
                  className="relative hover:shadow-lg hover:ease-out transition-all rounded-lg overflow-hidden border-[1px] border-gray-500  p-4"
               >
                  <div className="flex flex-col items-center py-1">
                     <img className="w-36 h-40" src={item.thumbnail} alt="" />
                  </div>
                  <div className={`absolute top-3 right-3 px-2 py-[1px] rounded-xl  inline-block text-xs ${theme === 'dark' ? 'border-[1px] border-green-300 bg-emerald-500 ' : 'bg-gray-200 text-gray-500'}`}>{item.tech}</div>
                  <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                  <p className={`text-sm text-gray-600 mt-1 ${theme === 'dark' ? 'text-gray-300' : ''} `}>{item.des}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default CardService