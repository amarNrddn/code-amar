import {
   START_FETCHING_PROJECT,
   SUCCESS_FETCHING_PROJECT,
   ERROR_FETCHING_PROJECT,
   START_FETCHING_ONE_PROJECT,
   SUCCESS_FETCHING_ONE_PROJECT,
   ERROR_FETCHING_ONE_PROJECT
} from './constans'
import { getApi } from '../../utils/fetch'

export const startFetchingProject = () => {
   return {
      type: START_FETCHING_PROJECT
   }
}

export const successFetchingProject = ({ data }) => {
   return {
      type: SUCCESS_FETCHING_PROJECT,
      data: data
   }
}

export const errorFetchingProject = () => {
   return {
      type: ERROR_FETCHING_PROJECT
   }
}

export const fetchingProject = () => {
   return async (dispatch) => {
      dispatch(startFetchingProject())
      try {
         const res = await getApi('project')
         dispatch(
            successFetchingProject({
               data: res
            })
         )
      } catch (error) {
         dispatch(errorFetchingProject())
      }
   }
}


export const startFetchingOneProject = () => {
   return {
      type: START_FETCHING_ONE_PROJECT
   }
}

export const successFetchingOnePreject = ({ project }) => {
   return {
      type: SUCCESS_FETCHING_ONE_PROJECT,
      project
   }
}

export const errorFetchingOneProject = () => {
   return {
      type: ERROR_FETCHING_ONE_PROJECT
   }
}

export const fetchingOneProject = (slug) => {
   return async (dispatch) => {
      try {
         const res = await getApi(`/project/${slug}`)
         dispatch(successFetchingOnePreject({ project: res }))
      } catch (error) {
         dispatch(errorFetchingOneProject())
      }
   }
}

