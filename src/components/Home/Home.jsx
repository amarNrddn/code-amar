import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { getApi } from '../../utils/fetch'
import { HeartFilledIcon, DotFilledIcon } from '@radix-ui/react-icons'

const Home = () => {
   const [datas, setDatas] = useState([])

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

   return (
      <div className='mt-4'>
         <div className="flex justify-between items-center mb-3">
            <TypeAnimation
               sequence={[
                  `Hello Folks, I'm`,
                  3000,
                  `Hello Folks, I'm Amar Nuruddin`,
                  3000,
                  `Hello Folks, I'm Software Engineer`,
               ]}
               wrapper="span"
               speed={10}
               repeat={Infinity}
               className=' font-bold text-gray-800 text-lg md:text-3xl '
            />
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulseDot"></div>
         </div>

         {datas.map((item) => {
            return (
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
                     <p className='text-base'>Based {item.city} <span className='text-xs font-semibold'>ID</span></p>
                  </div>
                  <p className='text-base text-pretty text-gray-700 mt-3'>{item.about}</p>
               </div>
            )
         })}
      </div>
   )
}

export default Home