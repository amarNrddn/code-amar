import {
   combineReducers,
   legacy_createStore as createStore,
   applyMiddleware,
   compose,
} from 'redux'


import { thunk } from "redux-thunk"
import articelReducer from './articel/reducer'
import bioReducer from './bio/reducer'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
   articel: articelReducer,
   bio: bioReducer
});


const store = createStore(
   rootReducers,
   composerEnhancer(applyMiddleware(thunk))
);

export default store

