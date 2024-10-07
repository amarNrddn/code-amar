import {
   START_FETCING_BIO,
   SUCCESS_FETCHING_BIO,
   ERROR_FETCHING_BIO
} from './constans'
import { getApi } from '../../utils/fetch'

export const startFetching = () => {
   return { type: START_FETCING_BIO }
}

export const successFetching = (bios) => {
   return { type: SUCCESS_FETCHING_BIO, bios }
}

export const errorFetching = () => {
   return { type: ERROR_FETCHING_BIO }
}

export const fetchingBio = () => {
   return async (dispatch) => {
      dispatch(startFetching())
      try {
         const res = await getApi('myjobs')
         dispatch(
            successFetching(res)
         )
      } catch (error) {
         dispatch(errorFetching())
      }
   }
}