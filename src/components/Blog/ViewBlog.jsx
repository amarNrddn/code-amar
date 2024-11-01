import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { configs } from '../../configs'
import { useSelector } from 'react-redux'

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

import useFormatDate from '../../hooks/formatDate';
import BorderDot from '../../atoms/BorderDot';
import Introduction from './Introduction';
import Content from './Content';
import Instalation from './Instalation';
import Code from './Code';
import Description from './Description';
import Tags from './Tags';
import ImageLazy from '../../atoms/ImageLazy';

const ViewBlog = () => {
   const navigate = useNavigate()
   const detailArtikel = useSelector((state) => state.articel.data)
   const formateDate = useFormatDate(detailArtikel.createdAt)
   const [isTitleVisible, setIsTitleVisible] = useState(true);

   const handleBack = () => {
      navigate('/blog')
   }

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY < 50) {
            setIsTitleVisible(true);
         } else {
            setIsTitleVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <motion.div className='pt-9 pb-5 w-full'
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
         <button
            className='flex items-center gap-2'
            onClick={handleBack}
         >
            <FaRegArrowAltCircleLeft className='text-xl' />
            <p className='text-gray-500'>Back</p>
         </button>

         <motion.h1
            className='text-xl mt-9 font-semibold'
            initial={{ y: -50, opacity: 0 }}
            animate={isTitleVisible ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
         >
            {detailArtikel.title}
         </motion.h1>
         <p className='mt-5 text-sm text-gray-500 mb-4'>Published on {formateDate}</p>
         <BorderDot className="mb-4" />
         <div className="w-full h-36 md:h-80 overflow-hidden relative">
            <ImageLazy
               image={`${configs.api_host_dev}/${detailArtikel.thumbnail}`}
               className='w-full h-full rounded-md object-cover transition-transform duration-500 ease-out hover:scale-105 hover:rounded-md hover:transform hover:origin-center'
            />
         </div>
         <Introduction />
         <Content />
         <Instalation />
         <Code />
         <Description />
         <Tags />
      </motion.div >
   )
}

export default ViewBlog