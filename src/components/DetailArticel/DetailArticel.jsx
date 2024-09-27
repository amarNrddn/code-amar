import React, { useEffect, useState } from 'react'
import { getApi } from '../../utils/fetch'
import { useNavigate, useParams } from 'react-router-dom'
import { configs } from '../../configs'

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import LoadingImage from '../Skeleton/LoadingImage';

const DetailArticel = () => {
   const { id } = useParams()
   const [artikels, setArtikels] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const navigate = useNavigate()

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

   const handleLoad = () => {
      setTimeout(() => {
         setIsLoading(false)

      }, 4000)
   }

   useEffect(() => {
      getArtikel()
   }, [])

   return (
      <div className='mt-5'>
         <button
            className='flex items-center gap-2'
            onClick={handleBack}
         >
            <FaRegArrowAltCircleLeft />
            Back
         </button>
         <p>{artikels.title}</p>
         {isLoading && <LoadingImage />}
         <div className="w-full h-36 md:h-80 overflow-hidden">
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