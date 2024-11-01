import React from 'react'
import CodeSinippet from '../../atoms/CodeSinippet'
import { useSelector } from 'react-redux'

const HowToStart = () => {
   const startproject = useSelector((state) => state.project.project)
   return (
      <>
         {startproject.clone === "" ? (
            ""
         ) : (
            <div className='mt-9'>
               <h1 className='font-bold text-lg mb-8'>How to Start this project</h1>
               <h1 className='font-bold text-lg'>1. Clone using git</h1>
               <CodeSinippet code={startproject.clone} />
            </div>
         )}

         {startproject.clone === "" ? (
            ""
         ) : (
            <div className='mt-9'>
               <h1 className='font-bold text-lg'>2. Install dependencies</h1>
               <CodeSinippet code={startproject.install} />
            </div>
         )}

         {startproject.run === "" ? (
            ""
         ) : (
            <div className='mt-9'>
               <h1 className='font-bold text-lg'>3. Run development server</h1>
               <CodeSinippet code={startproject.run} />
            </div>
         )}
      </>
   )
}

export default HowToStart