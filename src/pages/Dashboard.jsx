import React from 'react'
import { motion } from 'framer-motion'
import HeaderSection from '../atoms/HeaderSection'
import BorderDot from '../atoms/BorderDot'
import { FaGithub } from "react-icons/fa";
import GithubCalendar from '../components/Dashboard/GithubCalender';
import { TiFlowMerge } from "react-icons/ti";
import Border from '../atoms/Border'
import Roadmap from '../components/Dashboard/Roadmap';

const Dashboard = () => {
   return (
      <motion.div
         className='mt-4 md:mt-12 pb-10 w-full relative '
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
         <HeaderSection>Dashboard</HeaderSection>
         <p className='mt-5 text-gray-500'>This is my personal dashboard GitHub and Roadmap</p>
         <BorderDot className='my-6' />
         <HeaderSection className=''>
            <FaGithub />
            Contributions
         </HeaderSection>

         <div className="my-3 md:flex md:justify-between">
            <p className='text-gray-500'>My contributions from last year on github.</p>
            <a className='text-gray-500' href="https://github.com/amarNrddn" target='_blank' rel="noreferrer">@codeamar</a>
         </div>

         <GithubCalendar />
         <img className="w-full" src="https://ghchart.rshah.org/amarNrddn" alt="Name Your Github chart"></img>
         <Border className='my-8' />
         <HeaderSection>
            <TiFlowMerge />
            Roadmap
         </HeaderSection>
         <p className='my-4 text-gray-500'>Recommended learning paths and free course playlists based on what I've learned are suitable for beginners to intermediates.</p>

         <Roadmap />
      </motion.div>
   )
}

export default Dashboard