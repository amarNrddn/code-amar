import { useState } from 'react'

const useLoading = () => {
   const [isLoading, setIsloading] = useState(true)

   const handleLoad = () => {
      setIsloading(false)
   }
   return [isLoading, handleLoad]
}

export default useLoading