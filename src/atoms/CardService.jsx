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
                  className="hover:shadow-lg hover:ease-out transition-all rounded-lg overflow-hidden border-[1px] border-gray-500  p-4"
               >
                  <div className="flex flex-col items-center py-1">
                     <img className="w-36 h-40" src={item.thumbnail} alt="" />
                  </div>
                  <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                  <p className={`text-sm text-gray-600 mt-1 ${theme === 'dark' ? 'text-gray-300' : ''} `}>{item.des}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default CardService