import { combineReducers } from 'redux'

import queue from './queue'
import searchResults from './searchResults'

const rootReducer = combineReducers({ queue, searchResults })

export default rootReducer
