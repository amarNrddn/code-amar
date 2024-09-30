import React, { useEffect, useState, useMemo } from 'react'
import { getApi } from '../../utils/fetch'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { textPrimaryDark, textLight } from '../../contans/styles'
import { useTheme } from '../../contexts/ThemeProvider'

const Bio = () => {
   const [datas, setDatas] = useState([])
   const { theme } = useTheme()

   const handleGetDatas = async () => {
      try {
         const res = await getApi('myjobs')
         setDatas(res)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      handleGetDatas()
   }, [])

   const memoizedData = useMemo(() => {
      return datas.map((item) => (
         <div key={item.id} className=''>
            {item.Jobs.map((job) => (
               <p
                  key={job.id}
                  className='flex items-center gap-2 text-base text-gray-500'
               >
                  <DotFilledIcon className='w-4 h-4' />
                  {job.job}
               </p>
            ))}
            <div className='flex items-center gap-2 text-gray-500'>
               <DotFilledIcon className='w-4 h-4 ' />
               <p className='text-base'>
                  Based {item.city} <span className='text-xs font-semibold'>ID</span>
               </p>
            </div>
            <p className={`text-base text-pretty text-gray-700 mt-3 ${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}>
               {item.about}
            </p>
         </div>
      ))
   }, [datas, theme])

   return (
      <div className="">
         {memoizedData}
      </div>
   )
}

export default Bio
