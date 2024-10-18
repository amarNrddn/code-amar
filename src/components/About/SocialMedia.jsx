import React from 'react'
import { socialMedia } from '../../contans/marquee'

const SocialMedia = () => {
   return (
      <div className='flex gap-2'>
         {socialMedia.map((item, i) => (
            <a key={i} href={item.link}  className='' target='_blank' rel="noreferrer">
               <img src={item.icon} alt="" className='w-6 h-6' />
            </a>
         ))}
      </div>
   )
}

export default SocialMedia