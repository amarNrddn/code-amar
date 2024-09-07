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
      <div className=''>
         <div className="flex justify-between items-center">
            <TypeAnimation
               sequence={[
                  `Hello Folks, I'm`,
                  3000,
                  `Hello Folks, I'm Amar Nuruddin`,
               ]}
               wrapper="span"
               speed={10}
               style={{ fontSize: '20px', display: 'inline-block' }}
               repeat={Infinity}
               className=' font-bold text-black'
            />
            <HeartFilledIcon className='h-5 w-5 animate-bounce' />
         </div>

         {datas.map((item) => {
            return (
               <div key={item.id} className=''>
                  {item.Jobs.map((job) => (
                     <p
                        key={job.id}
                        className='flex items-center gap-2'
                     >
                        <DotFilledIcon className='w-5 h-5' />
                        {job.job}
                     </p>
                  ))}
                  <p className='flex items-center gap-2'>
                     <DotFilledIcon className='w-5 h-5' />
                     {item.city}
                  </p>
                  <p>{item.about}</p>
               </div>
            )
         })}
      </div>
   )
}

export default Home