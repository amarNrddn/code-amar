import React from 'react'
import { navprofil } from '../../assets'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'

const Profile = () => {
   return (
      <div className="flex items-center">
         <img className='object-cover rounded-full w-12 h-12' src={navprofil} alt='navprofile' />
         <h3 className='text-xl font-bold ml-2'>Amar Nuruddin</h3>
         <TbRosetteDiscountCheckFilled className='text-cyan-500 text-2xl ml-1' />
      </div>
   )
}

export default Profile