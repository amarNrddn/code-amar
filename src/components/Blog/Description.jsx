import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {
  const description = useSelector((state) => state.articel.data)
  return (
    <>
      {description.elucidation === "" ? (
        ""
      ) : (
      <div className='mt-4'>
        <h1 className='font-bold'>Penjelasan</h1>
        <p className='mt-4'>{description.elucidation}</p>
      </div>
      )}
    </>
  )
}

export default Description