import { ADD_TO_QUEUE, RETURN_ALL_ITEMS, SET_SEARCH_RESULTS } from '../actions'

export default function search(state = { results: [] }, action) {
  let i = 0
  let results = []
  switch(action.type) {
    case ADD_TO_QUEUE:
      results = [...state.results]
      i = results.findIndex(searchResult => searchResult.id === action.payload.id)

      if (i === -1) {
        return state
      }

      const patron = {...results[i]}
      patron.isQueued = true
      results.splice(i, 1, patron)

      return {
        ...state,
        results
      }
    case RETURN_ALL_ITEMS:
      results = [...state.results]
      i = results.findIndex(patron => patron.id === action.payload.id)

      if (i === -1) {
        return state
      }

      results.splice(i, 1)
      return {
        ...state,
        results
      }
    case SET_SEARCH_RESULTS:
      return {
        results: action.payload
      }
    default:
      return state
  }
}
