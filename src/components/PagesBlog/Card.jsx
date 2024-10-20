import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingArticel, fetchOneArticel } from '../../redux/blog/action'
import { configs } from '../../configs'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeProvider'

import HeaderSection from '../../atoms/HeaderSection'
import BorderDot from '../../atoms/BorderDot'
import ImageLazy from '../../atoms/ImageLazy'


const Card = () => {
   const dispatch = useDispatch()
   const blogs = useSelector((state) => state.articel.data)
   const navigate = useNavigate()
   const { theme } = useTheme()

   useEffect(() => {
      dispatch(fetchingArticel())
   }, [dispatch])

   const getOneBlog = (slug) => {
      dispatch(fetchOneArticel(slug))
      navigate(`/artikel/${slug}`)
   }

   return (
      <div className="w-full">
         <HeaderSection className=''>
            Welcome to my blog! Your Source for Expert Tips and Insights!
         </HeaderSection>

         <BorderDot className='my-5' />

         {blogs.length > 0 && (
            <>
               <div
                  className="rounded-md w-full cursor-pointer"
                  onClick={() => getOneBlog(blogs[0].slug)}
               >
                  <ImageLazy
                     image={`${configs.api_host_dev}/${blogs[0].thumbnail}`}
                     className='w-full  rounded-md'
                  />
                  <h2 className={`mt-2 font-bold  ${theme === 'dark' ? 'text-gray-400' : "text-gray-600"}`}>{blogs[0].title}</h2>
                  <p className="text-sm text-gray-500">
                     {new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(blogs[0].createdAt))}
                  </p>
               </div>

               <HeaderSection className='mt-5 mb-3 md:mt-6 md:mb-4'>
                  Related Articles
               </HeaderSection>

               <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {blogs.slice(1).map((item) => (
                     <div
                        key={item.id}
                        className="rounded-md  text-black cursor-pointer"
                        onClick={() => getOneBlog(item.slug)}
                     >
                        <ImageLazy
                           image={`${configs.api_host_dev}/${item.thumbnail}`}
                           className='w-full h-40 object-cover rounded-md'
                        />
                        <h2 className={`mt-2 font-bold hover:text-emerald-500 line-clamp-2 ${theme === 'dark' ? "text-gray-400" : 'text-gray-600'}`}>{item.title}</h2>
                        <p className="text-sm text-gray-500 my-3">
                           {new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(item.createdAt))}
                        </p>
                        <p className='line-clamp-2 text-gray-500'>{item.content}</p>
                     </div>
                  ))}
               </div>
            </>
         )}
      </div>
   );
};

export default Card;
