import React from 'react'
import { motion } from 'framer-motion'
import HeaderSection from '../atoms/HeaderSection'
import BorderDot from '../atoms/BorderDot'

const Card = React.lazy(() => import('../components/Project/Card'))

const Project = () => {
   return (
      <motion.div
         className='mt-4 md:mt-12 pb-10 w-full relative'
         initial={{ opacity: 0, x: 100, scale: 0.8 }}
         animate={{ opacity: 1, x: 0, scale: 1 }}
         transition={{
            ease: 'easeInOut',
            scale: {
               type: 'spring',
               stiffness: 300,
               damping: 20,
            },
         }}
      >
         <HeaderSection>About</HeaderSection>
         <p className='mt-5 text-gray-500'>Showcasing my passion for technology, design, and problem-solving through code.</p>
         <BorderDot className='my-6' />

         <Card />
      </motion.div>
   )
}

export default Project