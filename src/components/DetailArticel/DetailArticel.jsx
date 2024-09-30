import React, { useEffect, useState } from 'react'
import { getApi } from '../../utils/fetch'
import { useNavigate, useParams } from 'react-router-dom'
import { configs } from '../../configs'

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

import useLoading from '../../hooks/useLoading';
import useFormatDate from '../../hooks/formatDate';
import BorderDot from '../../atoms/BorderDot';
import CodeSinippet from '../../atoms/CodeSinippet';

const DetailArticel = () => {
   const { id } = useParams()
   const navigate = useNavigate()
   const [artikels, setArtikels] = useState([])
   const [isLoading, handleLoad] = useLoading()
   const formateDate = useFormatDate(artikels.createdAt)

   const getArtikel = async () => {
      try {
         const artikel = await getApi(`blog/${id}`)
         setArtikels(artikel)
         console.log(artikel)
      } catch (error) {
         console.log(error)
      }
   }

   const handleBack = () => {
      navigate(-1)
   }

   useEffect(() => {
      getArtikel()
   }, [])

   return (
      <motion.div className='pt-9 pb-5'
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

         <h1 className='text-xl mt-5 font-semibold' >{artikels.title}</h1>
         <p className='mt-5 text-sm text-gray-500 mb-4'>Published on {formateDate}</p>
         <BorderDot className="mb-4" />
         <div className="w-full h-36 md:h-80 overflow-hidden relative">
            <img
               className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${isLoading ? 'hidden' : 'block'}`}
               src={`${configs.api_host_dev}/${artikels.thumbnail}`}
               alt={artikels.thumbnail}
               loading='lazy'
               onLoad={handleLoad}
            />
         </div>
         <p>{artikels.content}</p>
         <CodeSinippet code={artikels.code_snippet} />
      </motion.div >
   )
}

export default DetailArticel