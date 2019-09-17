import {
  ADD_TO_QUEUE,
  RETURN_ALL_ITEMS,
  LOAD_PATRONS,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
  SET_SEARCH_BY
} from '../actions/constants'

export default function search(state = { patrons: [], results: [], term: '', by: 'phone' }, action) {
  let i = 0
  let j = 0
  let results = []
  switch(action.type) {
    case ADD_TO_QUEUE:
      results = [...state.results]
      const patrons = [...state.patrons]
      i = results.findIndex(searchResult => searchResult.id === action.payload.id)
      j = patrons.findIndex(patron => patron.id === action.payload.id)

      const patron = {...action.payload}

      if (i > -1) {
        results.splice(i, 1, patron)
      }

      if (j > -1) {
        patrons.splice(j, 1, patron)
      }
      
      return {
        ...state,
        results,
        patrons
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
    case LOAD_PATRONS:
      return {
        ...state,
        patrons: action.payload
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
