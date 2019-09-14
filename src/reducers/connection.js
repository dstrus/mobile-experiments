import * as connectionActions from '../actions/constants'

export default function connection(state = { state: '' }, action) {
  console.log(`ACTION TYPE: ${action.type}`)
  switch (action.type) {
    case connectionActions.CONNECTION_OPENING:
      return {
        state: 'OPENING'
      }
    case connectionActions.CONNECTION_SUBSCRIBING:
        return {
          state: 'SUBSCRIBING'
        }
    case connectionActions.CONNECTION_READY:
        return {
          state: 'READY'
        }
    default:
      return state
  }
}
