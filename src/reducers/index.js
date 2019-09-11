import { combineReducers } from 'redux'

import queue from './queue'
import search from './search'
import auth from './auth'

const rootReducer = combineReducers({ queue, search, auth })

export default rootReducer
