import { ADD_TO_QUEUE, RETURN_ALL_ITEMS } from '../actions'

export default function searchResults(state = [], action) {
  let i = 0
  switch(action.type) {
    case ADD_TO_QUEUE:
      const searchResults = [...state]
      i = searchResults.findIndex(searchResult => searchResult.id === action.payload.id)
      const patron = {...searchResults[i]}
      patron.isQueued = true
      searchResults.splice(i, 1, patron)

      return searchResults
    case RETURN_ALL_ITEMS:
      const patrons = [...state]
      i = patrons.findIndex(patron => patron.id === action.payload.id)
      patrons.splice(i, 1)
      return patrons
    default:
      return state
  }
}
