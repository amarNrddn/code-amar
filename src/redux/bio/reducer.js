import {
   START_FETCING_BIO,
   SUCCESS_FETCHING_BIO,
   ERROR_FETCHING_BIO
} from './constans'

const statuslist = {
   idle: 'idle',
   procces: 'procces',
   success: 'success',
   error: 'error'
}

const initialState = {
   data: [],
   status: statuslist.idle
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case START_FETCING_BIO:
         return { ...state, status: statuslist.procces }
      case SUCCESS_FETCHING_BIO:
         return { ...state, status: statuslist.success, data: action.bios }
      case ERROR_FETCHING_BIO:
         return { ...state, status: statuslist.error }
      default:
         return state
   }
}