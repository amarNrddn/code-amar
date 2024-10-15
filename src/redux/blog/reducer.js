import {
   START_FETCHING_ARTICEL,
   ERROR_FETCHING_ARTICEL,
   SUCCESS_FETCHING_ARTICEL,
   START_FETCHING_ONE_ARTIKEL,
   SUCCESS_FETCHING_ONE_ARTIKEL,
   ERROR_FETCHING_ONE_ARTIKEL
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
      case START_FETCHING_ARTICEL:
         return { ...state, status: statuslist.procces };
      case SUCCESS_FETCHING_ARTICEL:
         return { ...state, status: statuslist.success, data: action.articels };
      case ERROR_FETCHING_ARTICEL:
         return { ...state, status: statuslist.error };
      case START_FETCHING_ONE_ARTIKEL:
         return { ...state, status: statuslist.procces }
      case SUCCESS_FETCHING_ONE_ARTIKEL:
         return { ...state, status: statuslist.success, data: action.articel }
      case ERROR_FETCHING_ONE_ARTIKEL:
         return { ...state, status: statuslist.error }
      default:
         return state;
   }
}