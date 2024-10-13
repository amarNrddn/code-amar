import React from 'react'
import { useSelector } from 'react-redux'

const Tags = () => {
   const tags = useSelector((state) => state.articel.data);
   let parsedTags = [];
   
   const cleanTags = tags.tags ? tags.tags.replace(/\\\"/g, '"') : '';
   try {
      parsedTags = cleanTags ? JSON.parse(cleanTags) : [];
   } catch (error) {
      console.error('Error parsing tags:', error);
      parsedTags = []; 
   }
   const flattenedTags = Array.isArray(parsedTags) ? parsedTags.flat() : [];

   return (
      <div className='mt-10'>
         <h1 className='font-bold'>Tags:</h1>
         {flattenedTags.length > 0 ? (
            <div className=" py-2 px-2 flex flex-wrap">
               {flattenedTags.map((tag, index) => (
                  <span key={index} className="mr-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-lg mb-2 cursor-pointer">
                     {tag}
                  </span>
               ))}
            </div>
         ) : (
            <p>No tags available</p>
         )}
      </div>
   )
}

export default Tags