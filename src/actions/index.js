export const SIGN_IN = 'SIGN_IN'
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const RETURN_ALL_ITEMS = 'RETURN_ALL_ITEMS'

export function signIn() {
  console.log('sign in!')
  const uid = 1
  window.localStorage.setItem('uid', uid)
  return {
    type: 'SIGN_IN',
    payload: uid
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
