import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageLazy = ({ image, className = '' }) => {
   return (
      <LazyLoadImage
         src={image}
         className={className}
         effect='blur'
         wrapperProps={{
            style: { transitionDelay: "1s" },
         }}

      />
   )
}

export default ImageLazy