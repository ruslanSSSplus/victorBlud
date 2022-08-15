import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import usersReducer from "./Reducers/usersReducer";


let rootReducer = combineReducers({
      users: usersReducer,
  })

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));


export default store

