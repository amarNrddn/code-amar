import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchingOneProject } from '../../redux/project/action'
import { useState } from 'react'
import Loading from '../../atoms/Loading'

const ViewProject = () => {
   const { slug } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isTitleVisible, setIsTitleVisible] = useState(true)
   const project = useSelector((state) => state.project.project)
   const status = useSelector((state) => state.project.status)

   const handleBack = () => {
      navigate('/project')
   }

   useEffect(() => {
      dispatch(fetchingOneProject(slug))
   }, [dispatch, slug]);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY < 50) {
            setIsTitleVisible(true);
         } else {
            setIsTitleVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   if (status === 'process') {
      return <Loading />;
   }

   // Menampilkan pesan error jika gagal mengambil data
   if (status === 'error') {
      return <div>Error fetching project details.</div>;
   }

   // Jika data project masih null atau undefined, tampilkan loading sementara
   if (!project) {
      return <div>Loading...</div>;
   }

   return (
      <motion.div className='pt-9 pb-5 w-full'
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
         <button
            className='flex items-center gap-2'
            onClick={handleBack}
         >
            <FaRegArrowAltCircleLeft className='text-xl' />
            <p className='text-gray-500'>Back</p>
         </button>

         <motion.h1
            className='text-xl mt-9 font-semibold'
            initial={{ y: -50, opacity: 0 }}
            animate={isTitleVisible ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
         >
            {project.title}
         </motion.h1>
      </motion.div >
   )
}

export default ViewProject