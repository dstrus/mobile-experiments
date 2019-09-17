import {
  ADD_TO_QUEUE,
  RETURN_ALL_ITEMS,
  SELECT_PATRON,
  LOAD_PATRONS,
} from '../actions/constants'

function queue(state = [], action) {
  let patrons = []
  let patron = {}
  let i = -1
  switch(action.type) {
    case ADD_TO_QUEUE:
      patrons = [...state]
      i = patrons.findIndex(patron => patron.id === action.payload.id)
      if (i > -1) {
        patrons.splice(i, 1, action.payload)
        return patrons
      } else {
        return [...state, action.payload]
      }
    case RETURN_ALL_ITEMS:
      patrons = [...state]
      i = patrons.findIndex(patron => patron.id === action.payload.id)
      patrons.splice(i, 1)
      return patrons
    case SELECT_PATRON:
        patrons = [...state]
        i = patrons.findIndex(patron => patron.id === action.payload.id)
        patron = {...patrons[i]}
        patron.isSelected = true
        patrons.splice(i, 1)
        patrons.push(patron)
        return patrons
    case LOAD_PATRONS:
      const queue = action.payload.filter(patron => {
        return patron.tags.filter(tag => tag.queueEntryId).length > 0
      })
      return [...queue]
    default:
      return state
  }
}

export default queue
