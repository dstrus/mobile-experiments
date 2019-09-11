import { ADD_TO_QUEUE, RETURN_ALL_ITEMS, SELECT_PATRON } from '../actions'

function queue(state = [], action) {
  let patrons = []
  let i = -1
  switch(action.type) {
    case ADD_TO_QUEUE:
      return [
        ...state,
        action.payload,
      ]
    case RETURN_ALL_ITEMS:
      patrons = [...state]
      i = patrons.findIndex(patron => patron.id === action.payload.id)
      patrons.splice(i, 1)
      return patrons
    case SELECT_PATRON:
        patrons = [...state]
        i = patrons.findIndex(patron => patron.id === action.payload.id)
        const patron = {...patrons[i]}
        patron.isSelected = true
        patrons.splice(i, 1)
        patrons.push(patron)
        return patrons
    default:
      return state
  }
}

export default queue
