import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TO_QUEUE,
  SELECT_PATRON,
  RETURN_ALL_ITEMS,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
  SET_SEARCH_BY
} from './constants.js'

export function signIn() {
  const uid = 1
  window.localStorage.setItem('uid', uid)
  return {
    type: SIGN_IN,
    payload: uid
  }
}

export function signOut() {
  window.localStorage.removeItem('uid')
  return {
    type: SIGN_OUT
  }
}

export function addToQueue(patron) {
  return {
    type: ADD_TO_QUEUE,
    payload: patron
  }
}

export function selectPatron(patron) {
  return {
    type: SELECT_PATRON,
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
