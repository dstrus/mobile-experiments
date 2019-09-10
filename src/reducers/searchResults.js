import { ADD_TO_QUEUE, RETURN_ALL_ITEMS, SET_SEARCH_RESULTS } from '../actions'

export default function searchResults(state = [], action) {
  let i = 0
  switch(action.type) {
    case ADD_TO_QUEUE:
      const searchResults = [...state]
      i = searchResults.findIndex(searchResult => searchResult.id === action.payload.id)

      if (i === -1) {
        return state
      }

      const patron = {...searchResults[i]}
      patron.isQueued = true
      searchResults.splice(i, 1, patron)

      return searchResults
    case RETURN_ALL_ITEMS:
      const patrons = [...state]
      i = patrons.findIndex(patron => patron.id === action.payload.id)

      if (i === -1) {
        return state
      }

      patrons.splice(i, 1)
      return patrons
    case SET_SEARCH_RESULTS:
      return action.payload
    default:
      return state
  }
}
