import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import Search from './Search'
import Queue from './containers/QueueContainer'
import SignIn from './containers/SignInContainer'

import './App.css';

function App(props) {
  const signedIn = () => {
    return props.uid
  }

  return (
    <div className="App">
      <Switch>
        <Route
          path="/sign-in"
          render={
            () => (
              signedIn()
                ? <Redirect to="/search/phone" />
                : <SignIn />
            )
          }
        />
        <Route
          path="/search/:by?"
          render={
            () => (
              signedIn()
                ? <Search />
                : <Redirect to="/sign-in" />
            )
          }
        />
        <Route
          path="/queue"
          render={
            () => (
              signedIn()
                ? <Queue />
                : <Redirect to="/sign-in" />
            )
          }
        />
        <Route
          render={
            () => (
              signedIn()
                ? <Redirect to="/search/phone" />
                : <Redirect to="/sign-in" />
            )
          }
        />
      </Switch>
    </div>
  )
}

export default App;
