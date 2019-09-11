export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const RETURN_ALL_ITEMS = 'RETURN_ALL_ITEMS'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const SET_SEARCH_BY = 'SET_SEARCH_BY'

export function signIn() {
  const uid = 1
  window.localStorage.setItem('uid', uid)
  return {
    type: 'SIGN_IN',
    payload: uid
  }
}

export function signOut() {
  window.localStorage.removeItem('uid')
  return {
    type: 'SIGN_OUT'
  }
}

export function addToQueue(patron) {
  return {
    type: ADD_TO_QUEUE,
    payload: patron
  }
}

export function returnAllItems(patron) {
  return {
    type: RETURN_ALL_ITEMS,
    payload: patron
  }
}

export function setSearchResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  }
}

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  }
}

export function setSearchBy(by) {
  return {
    type: SET_SEARCH_BY,
    payload: by
  }
}
