import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Search from './containers/SearchContainer'
import Queue from './containers/QueueContainer'
import SignIn from './containers/SignInContainer'
import PatronDetails from './containers/PatronDetailsContainer'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    let signedIn = false

    if (props.connection.state === '') {
      props.wsConnect()
    }
    if (window.localStorage.getItem('uid')) {
      props.signIn()
      signedIn = true
    }

    this.state = {
      signedIn
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.uid && !this.props.uid) {
      this.setState({ signedIn: false })
    } else if (!prevProps.uid && this.props.uid) {
      this.setState({ signedIn: true })
    }

    const prevStatus = prevProps.connection.state
    const status = this.props.connection.state
    if (status === 'READY' && prevStatus !== 'READY') {
      this.props.wsGetInitialData()
    }
  }

  signedIn = () => {
    return this.state.signedIn
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
            path="/patrons/:id"
            render={
              () => (
                this.signedIn()
                  ? <PatronDetails />
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
