import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import Search from './Search'
import Queue from './containers/QueueContainer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search/:by?" component={Search} />
        <Route path="/queue" component={Queue} />
        <Route render={() => <Redirect to="/search/phone" />} />
      </Switch>
    </div>
  )
}

export default App;
