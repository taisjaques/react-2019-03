import { createStore, combineReducers, applyMiddleware } from 'redux'
import counter from "./counter/counter"
import logger from 'redux-logger'

const reducers = combineReducers({ counter })

const store = createStore(reducers, applyMiddleware(logger))

export default store