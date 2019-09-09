export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'

export function addToQueue(patron) {
  return {
    type: ADD_TO_QUEUE,
    payload: patron
  }
}
