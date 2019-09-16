import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Search from './containers/SearchContainer'
import Queue from './containers/QueueContainer'
import SignIn from './containers/SignInContainer'
import CheckinDetails from './containers/CheckinDetailsContainer'

import './App.css'

class App extends Component {

  componentDidMount() {
    if (this.props.connection.state === '') {
      this.props.wsConnect()
    }
    if (window.localStorage.getItem('uid')) {
      this.props.signIn()
    }
    window.localStorage.setItem('tested', false)
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStatus = prevProps.connection.state
    const status = this.props.connection.state
    if (status === 'READY' && prevStatus !== 'READY') {
      this.props.wsLoadCheckins()
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
                  ? <Redirect to="/search" />
                  : <SignIn />
              )
            }
          />
          <Route
            path="/search"
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
            path="/checkins/:id"
            render={
              () => (
                this.signedIn()
                  ? <CheckinDetails />
                  : <Redirect to="/sign-in" />
              )
            }
          />
          <Route
            render={
              () => (
                this.signedIn()
                  ? <Redirect to="/search" />
                  : <Redirect to="/sign-in" />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
