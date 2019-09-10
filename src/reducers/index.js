import { combineReducers } from 'redux'

import queue from './queue'
import searchResults from './searchResults'
import auth from './auth'

const rootReducer = combineReducers({ queue, searchResults, auth })

export default rootReducer
