import React from 'react'
import { useSelector } from 'react-redux'
import CodeSinippet from '../../atoms/CodeSinippet'

const Code = () => {
   const code = useSelector((state) => state.articel.data)
   return (
      <div className='mt-4'>
         <h1 className='font-bold mb-4'>Integration</h1>
         <CodeSinippet code={code.code_snippet} />
      </div>
   )
}

export default Code