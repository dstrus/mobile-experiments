import { combineReducers } from 'redux'

import queue from './queue'
import search from './search'
import auth from './auth'
import connection from './connection'

const rootReducer = combineReducers({ queue, search, auth, connection })

export default rootReducer
