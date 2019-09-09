import { ADD_TO_QUEUE } from '../actions'

export default function searchResults(state = [], action) {
  switch(action.type) {
    case ADD_TO_QUEUE:
      const searchResults = [...state]
      const i = searchResults.findIndex(searchResult => searchResult.id === action.payload.id)
      const patron = {...searchResults[i]}
      patron.isQueued = true
      searchResults.splice(i, 1, patron)

      return searchResults
    default:
      return state
  }
}
