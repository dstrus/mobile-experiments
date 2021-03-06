import {
  CONNECTION_OPENING,
  CONNECTION_SUBSCRIBING,
  CONNECTION_READY,
  WS_CONNECT,
  WS_SUBSCRIBE,
  WS_GET_INITIAL_DATA,
  WS_ADD_TO_QUEUE,
} from './constants';

export function opening() {
  return {
    type: CONNECTION_OPENING,
  }
}

export function subscribing() {
  return {
    type: CONNECTION_SUBSCRIBING,
  }
}

export function ready() {
  return {
    type: CONNECTION_READY,
  }
}

export function wsConnect() {
  return {
    type: WS_CONNECT,
    payload: '5ad2cf0e-1b2b-4d71-b1f0-8e54f8ca1ffe'
  }
}

export function wsSubscribe() {
  return {
    type: WS_SUBSCRIBE,
  }
}

export function wsGetInitialData() {
  return {
    type: WS_GET_INITIAL_DATA,
    channel: 'OperatorChannel',
  }
}

export function wsAddToQueue(patron, ids) {
  return {
    type: WS_ADD_TO_QUEUE,
    payload: {
      patron_id: patron.id,
      item_ids: ids || patron.tags.map(tag => tag.id)
    }
  }
}
