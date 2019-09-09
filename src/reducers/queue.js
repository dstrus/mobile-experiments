import { ADD_TO_QUEUE } from '../actions'

function queue(state = [], action) {
  switch(action.type) {
    case ADD_TO_QUEUE:
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
}

export default queue
