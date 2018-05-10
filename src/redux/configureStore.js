import {  createStore , applyMiddleware , combineReducers } from 'redux'
import {createLogger} from 'redux-logger'
import toDoApp from './modules/toDoApp'
import thunkMiddleware from 'redux-thunk'

//初始化logger
const loggerMiddleware = createLogger()
//apply logger to redux
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,thunkMiddleware
)(createStore)


const reducer =  combineReducers({
    toDoApp
})

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);


const store = configureStore()

export default store
