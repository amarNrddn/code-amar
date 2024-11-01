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
   success: 'success',
   error: 'error'
}

const initialState = {
   data: [],
   project: null,
   statuslist: statuslist.idle
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case START_FETCHING_PROJECT:
         return { ...state, status: statuslist.process }
      case SUCCESS_FETCHING_PROJECT:
         return { ...state, status: statuslist.success, data: action.projects }
      case ERROR_FETCHING_PROJECT:
         return { ...state, status: statuslist.error }
      case START_FETCHING_ONE_PROJECT:
         return { ...state, status: statuslist.process }
      case SUCCESS_FETCHING_ONE_PROJECT:
         return { ...state, status: statuslist.success, project: action.project }
      case ERROR_FETCHING_ONE_PROJECT:
         return { ...state, status: statuslist.error }
      default:
         return state
   }
}