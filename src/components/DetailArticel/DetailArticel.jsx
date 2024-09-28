import React, { useEffect, useState } from 'react'
import { getApi } from '../../utils/fetch'
import { useNavigate, useParams } from 'react-router-dom'
import { configs } from '../../configs'

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import LoadingImage from '../Skeleton/LoadingImage';
import useLoading from '../../hooks/useLoading';
import useFormatDate from '../../hooks/formatDate';

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
      <div className='pt-9'>
         <button
            className='flex items-center gap-2'
            onClick={handleBack}
         >
            <FaRegArrowAltCircleLeft className='text-xl' />
            <p className='text-gray-500'>Back</p>
         </button>

         <h1 className='text-xl mt-5 font-semibold' >{artikels.title}</h1>
         <p>{formateDate}</p>
         <div className="w-full h-36 md:h-80 overflow-hidden relative">
            {isLoading && <LoadingImage />}
            <img
               className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${isLoading ? 'hidden' : 'block'}`}
               src={`${configs.api_host_dev}/${artikels.thumbnail}`}
               alt={artikels.thumbnail}
               loading='lazy'
               onLoad={handleLoad}
            />
         </div>
         <p>{artikels.content}</p>
      </div >
   )
}

export default DetailArticel