import { SIGN_IN } from '../actions'

function auth(state = {}, action) {
  switch(action.type) {
    case SIGN_IN:
      return {
        uid: action.payload
      }
    default:
      return state
  }
}

export default auth
