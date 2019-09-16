import {
  ADD_TO_QUEUE,
  RETURN_ALL_ITEMS,
  LOAD_CHECKINS,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
  SET_SEARCH_BY
} from '../actions/constants'

export default function search(state = { checkins: [], results: [], term: '', by: 'phone' }, action) {
  let i = 0
  let results = []
  switch(action.type) {
    case ADD_TO_QUEUE:
      results = [...state.results]
      i = results.findIndex(searchResult => searchResult.id === action.payload.id)

      if (i === -1) {
        return state
      }

      const checkin = {...results[i]}
      checkin.isQueued = true
      results.splice(i, 1, checkin)

      return {
        ...state,
        results
      }
    case RETURN_ALL_ITEMS:
      results = [...state.results]
      i = results.findIndex(checkin => checkin.id === action.payload.id)

      if (i === -1) {
        return state
      }

      results.splice(i, 1)
      return {
        ...state,
        results
      }
    case LOAD_CHECKINS:
      return {
        ...state,
        checkins: action.payload
      }
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      }
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      }
    case SET_SEARCH_BY:
      return {
        ...state,
        by: action.payload
      }
    default:
      return state
  }
}
