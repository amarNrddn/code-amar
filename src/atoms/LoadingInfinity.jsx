import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoadingInfinity = () => {
   return (
      <div className='text-center w-full flex justify-center'>
         <InfinitySpin
            visible={true}
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
            className=""
         />
      </div>
   )
}

export default LoadingInfinity