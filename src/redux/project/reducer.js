import {
   START_FETCHING_PROJECT,
   SUCCESS_FETCHING_PROJECT,
   ERROR_FETCHING_PROJECT,
   START_FETCHING_ONE_PROJECT,
   SUCCESS_FETCHING_ONE_PROJECT,
   ERROR_FETCHING_ONE_PROJECT
} from './constans'

const statuslist = {
   idle: 'idle',
   process: 'procces',
   success: 'succes',
   error: 'error'
}

const initialState = {
   data: [],
   statuslist: statuslist.idle
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case START_FETCHING_PROJECT:
         return { ...state, status: statuslist.process }
      case SUCCESS_FETCHING_PROJECT:
         return { ...state, status: statuslist.success, data: action.data }
      case ERROR_FETCHING_PROJECT:
         return { ...state, status: statuslist.error }
      case START_FETCHING_ONE_PROJECT:
         return { ...state, status: statuslist.process }
      case SUCCESS_FETCHING_ONE_PROJECT:
         return { ...state, status: statuslist.success, data: action.project }
      default:
         return state
   }
}