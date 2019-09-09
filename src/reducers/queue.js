import { ADD_TO_QUEUE, RETURN_ALL_ITEMS } from '../actions'

function queue(state = [], action) {
  switch(action.type) {
    case ADD_TO_QUEUE:
      return [
        ...state,
        action.payload,
      ]
    case RETURN_ALL_ITEMS:
      const patrons = [...state]
      const i = patrons.findIndex(patron => patron.id === action.payload.id)
      patrons.splice(i, 1)
      return patrons
    default:
      return state
  }
}

export default queue
