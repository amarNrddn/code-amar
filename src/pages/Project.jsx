import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingProject } from '../redux/project/action'

const Project = () => {
   const dispatch = useDispatch()
   const project = useSelector((state) => state.project.data)

   useEffect(() => {
      dispatch(fetchingProject())
   }, [dispatch])

   console.log(project)
   return (
      <div>Project</div>
   )
}

export default Project