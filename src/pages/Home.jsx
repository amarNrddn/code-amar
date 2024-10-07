import React, { Suspense, useEffect, useRef, } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Border from '../atoms/Border';
import Loading from '../atoms/Loading';

import { useTheme } from '../contexts/ThemeProvider'
import { bgDark, bgWhite, textLight } from '../contans/styles'

import { LuCalendarHeart } from "react-icons/lu";
import { FcAdvertising } from "react-icons/fc";
import { RiServiceFill } from "react-icons/ri";
import { motion } from 'framer-motion'

import Bio from '../components/Bio/Bio';
import RunText from '../atoms/RunText';
import { fetchingArticel } from '../redux/articel/action';
import LoadingInfinity from '../atoms/LoadingInfinity';

const CardArticel = React.lazy(() => import('../components/CardArticel/CardArticel'))
const CardService = React.lazy(() => import('../components/CardServices/CardService'))

const Home = () => {
   const { theme } = useTheme()
   const scrollContainerRef = useRef(null)

   const dispatch = useDispatch()
   const artikel = useSelector((state) => state.articel)
   const isLoading = useSelector((state) => state.articel.isLoading)

   useEffect(() => {
      dispatch(fetchingArticel())
   }, [dispatch])

   useEffect(() => {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer && artikel.data.length > 0 && !isLoading) {
         let animationFrameId;
         const cardWidth = scrollContainer.firstChild?.offsetWidth || 0;
         let scrollAmount = cardWidth;

         const smoothScroll = (direction) => {
            scrollContainer.scrollBy({
               left: direction * scrollAmount,
               behavior: 'smooth',
            });
         };

         const scrollLeft = () => {
            smoothScroll(1);
            setTimeout(() => {
               smoothScroll(-1);
            }, 2000);
         };

         animationFrameId = requestAnimationFrame(() => setTimeout(scrollLeft, 1000));

         return () => {
            if (animationFrameId) {
               cancelAnimationFrame(animationFrameId);
            }
         };
      }
   }, [artikel.data.length, isLoading]);

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : (
            <motion.div 
               className='mt-4 md:mt-12 pb-10'
               initial={{ opacity: 0, x: 100, scale: 0.8 }}
               animate={{ opacity: 1, x: 0, scale: 1 }}
               transition={{
                  ease: 'easeInOut',
                  scale: {
                     type: 'spring',
                     stiffness: 300,
                     damping: 20,
                  },
               }}
            >
               <RunText />
               <Bio />
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
                           <a href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode" target='_blank' rel="noreferrer">
                              <button className={`w-full flex items-center gap-2 px-2  py-2 text-gray-500 rounded-md text-xs text-start md:justify-center ${theme === 'dark' ? `${bgDark.className} ${textLight.className}` : bgWhite.className}`}>
                                 <FcAdvertising className='text-xl -rotate-12' />
                                 SynthWave '84! visual studio code theme extension
                              </button>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="lg:max-w-3xl md:max-w-xl mt-5 relative ">
                     <div
                        className="w-full flex overflow-x-auto gap-4 whitespace-nowrap non-scrole"
                        ref={scrollContainerRef}
                     >
                        <Suspense fallback={<LoadingInfinity />}>
                           {artikel.data.length > 0 ? (
                              <CardArticel />
                           ) : (
                              <p className='w-full text-center'>No articles available</p>
                           )}
                        </Suspense>
                     </div>
                  </div>
                  <Border className='my-8' />
                  <div className="mb-5">
                     <div className="flex items-center text-xl font-semibold gap-3 text-gray-600 ">
                        <RiServiceFill />
                        Services
                     </div>
                     <p className='text-gray-500 mt-2'>I can deliver the following services</p>
                  </div>
                  <CardService />
               </div>
            </motion.div >
         )}
      </>
   )
}

export default Home