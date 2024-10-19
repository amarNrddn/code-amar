import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { configs } from '../../configs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneArticel, fetchingArticel } from '../../redux/blog/action'

const CardArticel = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const artikel = useSelector((state) => state.articel)

   useEffect(() => {
      dispatch(fetchingArticel())
   }, [dispatch])

   const getOneBlog = (slug) => {
      dispatch(fetchOneArticel(slug))
      navigate(`artikel/${slug}`)
   }

   const memoizedArticles = useMemo(() => {
      return artikel.data.map((item) => {
         const date = new Date(item.createdAt)
         const options = { year: 'numeric', month: 'long', day: '2-digit' }
         const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date)

         return (
            <div
               key={item.id}
               className="w-52 rounded-lg overflow-hidden flex-shrink-0 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95"
               onClick={() => getOneBlog(item.slug)}
            >
               <div className="relative w-full h-28">
                  <img
                     src={`${configs.api_host_dev}/${item.thumbnail}`}
                     alt="thumbnail"
                     className="w-full h-28 rounded-md object-cover"
                     loading="lazy"
                  />
               </div>
               <div className="mt-2">
                  <h2 className="font-semibold text-sm overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">{item.title}</h2>
                  <p className="text-gray-400 text-xs">{formattedDate}</p>
               </div>
            </div>
         )
      })
   }, [artikel.data])

   return <>{memoizedArticles}</>
}

export default CardArticel
