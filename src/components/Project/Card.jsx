import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingOneProject, fetchingProject } from '../../redux/project/action'
import ImageLazy from '../../atoms/ImageLazy'
import { configs } from '../../configs'
import { useNavigate } from 'react-router-dom'
import { fetchOneArticel } from '../../redux/blog/action'

const Card = () => {
   const dispatch = useDispatch()
   const project = useSelector((state) => state.project.data)
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(fetchingProject())
   }, [dispatch])

   const handleToDetailProject = (slug) => {

      dispatch(fetchingOneProject(slug))
      navigate(`project/:${slug}`)
   }

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         {project.map((item, id) => (
            <div
               key={id}
               className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-103 relative"
               onClick={() => handleToDetailProject(item.slug)}
            >
               <ImageLazy
                  image={`${configs.api_host_dev}/${item.thumbnail}`}
                  className='w-full h-52 object-cover'
               />

               <div className="p-4 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="mt-2 text-gray-600 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                     {item.techstacks.map((tag, id) => (
                        <span
                           key={id}
                           className="bg-blue-100 text-blue-500 text-sm font-medium px-2 py-1 rounded"
                        >
                           {tag.techstack}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Card