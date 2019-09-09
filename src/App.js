import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import Search from './Search'
import Queue from './containers/QueueContainer'

import './App.css';

class App extends Component {
  state = {
    searchingByPhone: true,
    searchingByTag: false,
  }

  searchByPhone = () => {
    this.setState({
      searchingByPhone: true,
      searchingByTag: false,
    })
  }

  searchByTag = () => {
    this.setState({
      searchingByPhone: false,
      searchingByTag: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            path="/search" 
            render={() => (
              <Search
                searchingByPhone={this.state.searchingByPhone}
                searchingByTag={this.state.searchingByTag}
                searchByPhone={this.searchByPhone}
                searchByTag={this.searchByTag}
              />
            )}
          />
          <Route path="/queue" component={Queue} />
          <Route render={() => <Redirect to="/search" />} />
        </Switch>
      </div>
    )
  }
}

export default App;
