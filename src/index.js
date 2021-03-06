import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import rootReducer from './reducers'
import websocket from './middlewares/websocket'
import App from './containers/AppContainer'
import * as serviceWorker from './serviceWorker'

const store = createStore(
  rootReducer,
  {
    queue: [],
    search: { patrons: [], results: [], term: '', by: 'phone' },
    auth: {},
    connection: { state: '' },
  },
  applyMiddleware(websocket)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
