import {
   ERROR_FETCHING_ARTICEL,
   START_FETCHING_ARTICEL,
   SUCCESS_FETCHING_ARTICEL,
   START_FETCHING_ONE_ARTIKEL,
   SUCCESS_FETCHING_ONE_ARTIKEL,
   ERROR_FETCHING_ONE_ARTIKEL
} from './constans'
import { getApi } from '../../utils/fetch'

export const startFetching = () => {
   return {
      type: START_FETCHING_ARTICEL
   }
}

export const successFetching = ({ articels }) => {
   return {
      type: SUCCESS_FETCHING_ARTICEL,
      articels
   }
}

export const errorFetching = () => {
   return {
      type: ERROR_FETCHING_ARTICEL
   }
}

export const startFetchingOneArticel = () => {
   return {
      type: START_FETCHING_ONE_ARTIKEL
   }
}

export const successFetchingOneArticel = ({ articel }) => {
   return {
      type: SUCCESS_FETCHING_ONE_ARTIKEL,
      articel
   }
}

export const errorFetchingOneArticel = () => {
   return {
      type: ERROR_FETCHING_ONE_ARTIKEL
   }
}

export const fetchingArticel = () => {
   return async (dispatch) => {
      dispatch(startFetching())
      try {
         const res = await getApi('blog')
         dispatch(
            successFetching({
               articels: res
            })
         )
      } catch (error) {
         dispatch(errorFetching())
      }
   }
}

export const fetchOneArticel = (slug) => {
   return async (dispatch) => {
      dispatch(startFetchingOneArticel())
      try {
         const res = await getApi(`blog/${slug}`)

         dispatch(successFetchingOneArticel({ articel: res }))
      } catch (error) {
         dispatch(errorFetchingOneArticel())
      }
   }
}