import React from 'react'
import { motion } from 'framer-motion'
import HeaderSection from '../atoms/HeaderSection'
import BorderDot from '../atoms/BorderDot'
import Story from '../components/About/Story'

const About = () => {
   return (
      <motion.div
         className='mt-4 md:mt-12 pb-10 '
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
         <p className='mt-5 text-gray-500'>A short story of me</p>
         <BorderDot className='my-6'/>
         <Story />
      </motion.div>
   )
}

export default About