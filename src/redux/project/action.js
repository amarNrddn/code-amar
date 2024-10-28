import {
   START_FETCHING_PROJECT,
   SUCCESS_FETCHING_PROJECT,
   ERROR_FETCHING_PROJECT
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

