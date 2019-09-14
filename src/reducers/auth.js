import { SIGN_IN, SIGN_OUT } from '../actions/constants'

function auth(state = {}, action) {
  switch(action.type) {
    case SIGN_IN:
      return {
        uid: action.payload
      }
    case SIGN_OUT:
      return {
        uid: undefined
      }
    default:
      return state
  }
}

export default auth
