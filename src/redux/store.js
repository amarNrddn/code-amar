import {
   combineReducers,
   legacy_createStore as createStore,
   applyMiddleware,
   compose,
} from 'redux'


import { thunk } from "redux-thunk"
import articelReducer from './blog/reducer'
import bioReducer from './bio/reducer'
import projectReducer from './project/reducer'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
   articel: articelReducer,
   bio: bioReducer,
   project: projectReducer
});


const store = createStore(
   rootReducers,
   composerEnhancer(applyMiddleware(thunk))
);

export default store

