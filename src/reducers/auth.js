import { SIGN_IN, SIGN_OUT } from '../actions'

function auth(state = {}, action) {
  switch(action.type) {
    case SIGN_IN:
      return {
        uid: action.payload
      }
    case SIGN_OUT:
      return {
        state: undefined,
        uid: action.payload
      }
    default:
      return state
  }
}

export default auth
