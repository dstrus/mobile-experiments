import {
  ADD_TO_QUEUE,
  RETURN_ALL_ITEMS,
  SELECT_CHECKIN
} from '../actions/constants'

function queue(state = [], action) {
  let checkins = []
  let i = -1
  switch(action.type) {
    case ADD_TO_QUEUE:
      checkins = [...state]
      i = checkins.findIndex(checkin => checkin.id === action.payload.id)
      if (i > -1) {
        return state
      } else {
        return [...state, action.payload]
      }
    case RETURN_ALL_ITEMS:
      checkins = [...state]
      i = checkins.findIndex(checkin => checkin.id === action.payload.id)
      checkins.splice(i, 1)
      return checkins
    case SELECT_CHECKIN:
        checkins = [...state]
        i = checkins.findIndex(checkin => checkin.id === action.payload.id)
        const checkin = {...checkins[i]}
        checkin.isSelected = true
        checkins.splice(i, 1)
        checkins.push(checkin)
        return checkins
    default:
      return state
  }
}

export default queue
