import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import { getApi } from '../utils/fetch'

import Border from '../atoms/Border';
import CardArticel from '../atoms/CardArticel';
import { useTheme } from '../contexts/ThemeProvider'
import { themeDark, themeLight, bgDark, bgWhite, textLight, textPrimaryDark } from '../contans/styles'

import { DotFilledIcon } from '@radix-ui/react-icons'
import { LuCalendarHeart } from "react-icons/lu";
import { FcAdvertising } from "react-icons/fc";
import { motion } from 'framer-motion'
import Services from './Services';

const Home = () => {
   const { theme } = useTheme()
   const [datas, setDatas] = useState([])
   const [articels, setArticels] = useState([])
   const scrollContainerRef = useRef(null)

   const handleGetDatas = async () => {
      try {
         const res = await getApi('myjobs')
         setDatas(res)
      } catch (error) {
         console.log(error)
      }
   }

   const loadDatasCard = async () => {
      try {
         const loadData = await getApi('blog')
         setArticels(loadData)
      } catch (error) {

      }
   }

   useEffect(() => {
      handleGetDatas()
      loadDatasCard()
   }, [])

   useEffect(() => {
      const scrollContainer = scrollContainerRef.current

      if (scrollContainer) {
         const cardWidth = scrollContainer.firstChild?.offsetWidth || 0;
         let scrollAmount = cardWidth;

         const scrollLeft = () => {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setTimeout(() => {
               scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }, 2000);
         };
         setTimeout(scrollLeft, 1000);
      }
   }, [articels])

   return (
      <motion.div
         className='mt-4 md:mt-12'
         initial={{ opacity: 0, x: '70vw', filter: 'blur(10px)' }}
         animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
         transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
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
               className={`font-bold text-xl md:text-3xl`}
            />
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulseDot"></div>
         </div>

         <div className="">
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
                     <p className={`text-base text-pretty text-gray-700 mt-3 ${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}>{item.about}</p>
                  </div>
               )
            })}
         </div>

         <div className="">
            <Border className='my-8' />
            <div className="">
               <div className='flex items-center text-xl font-semibold gap-3 text-gray-600'>
                  <LuCalendarHeart />
                  <p>Latest Articles</p>
               </div>

               <div className="mt-4 md:flex md:justify-between md:items-center">
                  <p className={`text-md text-gray-500`}>Latest articles from dev.to</p>
                  <div className="p-[3px] bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:400%_400%] animate-rainbow rounded-lg mt-2 md:w-[335px]">
                     <a href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode" target='_blank'>
                        <button className={`w-full flex items-center gap-2 px-2  py-2 text-gray-500 rounded-md text-xs text-start md:justify-center ${theme === 'dark' ? `${bgDark.className} ${textLight.className}` : bgWhite.className}`}>
                        <FcAdvertising className='text-xl -rotate-12' />
                        SynthWave '84! visual studio code theme extension
                     </button>
                  </a>
               </div>
            </div>
         </div>

         <div className="lg:max-w-3xl md:max-w-xl mt-4 relative ">
            <div
               className="w-full flex overflow-x-auto gap-4 whitespace-nowrap non-scrole"
               ref={scrollContainerRef}
            >
               <CardArticel articels={articels} />
            </div>
         </div>
         <Services />
      </div>
      </motion.div >
   )
}

export default Home