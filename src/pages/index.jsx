import React from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'

const AppPages = () => {
   return (
      <div>
         <Navbar />
         <div className='px-2'>
            <Home />
         </div>
      </div>
   )
}

export default AppPages