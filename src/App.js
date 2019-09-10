import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import Search from './containers/SearchContainer'
import Queue from './containers/QueueContainer'
import SignIn from './containers/SignInContainer'

import './App.css';

class App extends Component {

  componentDidMount() {
    if (window.localStorage.getItem('uid')) {
      this.props.signIn()
    }
  }

  signedIn = () => {
    return this.props.uid
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/sign-in"
            render={
              () => (
                this.signedIn()
                  ? <Redirect to="/search/phone" />
                  : <SignIn />
              )
            }
          />
          <Route
            path="/search/:by?"
            render={
              () => (
                this.signedIn()
                  ? <Search />
                  : <Redirect to="/sign-in" />
              )
            }
          />
          <Route
            path="/queue"
            render={
              () => (
                this.signedIn()
                  ? <Queue />
                  : <Redirect to="/sign-in" />
              )
            }
          />
          <Route
            render={
              () => (
                this.signedIn()
                  ? <Redirect to="/search/phone" />
                  : <Redirect to="/sign-in" />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App;
