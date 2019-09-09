import React, { Component } from 'react';

import Header from './Header'
import Search from './Search'
import Queue from './containers/QueueContainer'

import './App.css';

class App extends Component {
  state = {
    searchIsShowing: true,
    searchingByPhone: true,
    searchingByTag: false,
  }

  showSearch = () => {
    this.setState({ searchIsShowing: true })
  }

  hideSearch = () => {
    this.setState({ searchIsShowing: false })
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
        <Header
          searchIsShowing={this.state.searchIsShowing}
          showSearch={this.showSearch}
          hideSearch={this.hideSearch}
        />

        <div>
          {
            this.state.searchIsShowing && (
              <Search
                searchingByPhone={this.state.searchingByPhone}
                searchingByTag={this.state.searchingByTag}
                searchByPhone={this.searchByPhone}
                searchByTag={this.searchByTag}
              />
            )
          }

          {
            !this.state.searchIsShowing && <Queue />
          }
        </div>
      </div>
    );
  }
}

export default App;
