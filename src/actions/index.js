import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TO_QUEUE,
  SELECT_CHECKIN,
  RETURN_ALL_ITEMS,
  LOAD_CHECKINS,
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

export function addToQueue(checkin) {
  return {
    type: ADD_TO_QUEUE,
    payload: checkin
  }
}

export function selectCheckin(checkin) {
  return {
    type: SELECT_CHECKIN,
    payload: checkin
  }
}

export function returnAllItems(checkin) {
  return {
    type: RETURN_ALL_ITEMS,
    payload: checkin
  }
}

export function loadCheckins(checkins) {
  return {
    type: LOAD_CHECKINS,
    payload: checkins
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
