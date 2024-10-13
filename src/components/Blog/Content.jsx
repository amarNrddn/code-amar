import React from 'react'
import { useSelector } from 'react-redux'

const Content = () => {
   const conten = useSelector((state) => state.articel.data)
   return (
      <div className='mt-6'>
         <h1 className='font-bold'>{conten.titleconten}</h1>
         <p className='mt-4 text-base'>{conten.content}</p>
      </div>
   )
}

export default Content