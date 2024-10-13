import React from 'react'
import CodeSinippet from '../../atoms/CodeSinippet'
import { useSelector } from 'react-redux'

const Instalation = () => {
   const instalation = useSelector((state) => state.articel.data)
   return (
      <>
         {instalation.instalation === "" ? (
            ""
         ) : (
            <div className='mt-6'>
               <h1 className='font-bold mb-3'>Instalation</h1>
               <CodeSinippet code={instalation.instalation} />
            </div>
         )}
      </>
   )
}

export default Instalation