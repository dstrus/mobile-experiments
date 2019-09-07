import React, { Component } from 'react';

import Header from './Header'
import Search from './Search'
import SideMenu from './SideMenu'
import Queue from './Queue'

import './App.css';

class App extends Component {
  state = {
    searchIsShowing: true,
    searchingByPhone: true,
    searchingByTag: false,
    menuIsShowing: false,
    queue: [],
    myQueue: [],
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

  showMenu = () => {
    this.setState({ menuIsShowing: true })
  }

  hideMenu = () => {
    this.setState({ menuIsShowing: false })
  }

  addToQueue = (patron) => {
    this.setState((state, props) => {
      const { queue } = state
      queue.push(patron)
      this.setState({ queue })
    })
  }

  render() {
    return (
      <div className="App">
        <SideMenu
          show={this.state.menuIsShowing}
          hideMenu={this.hideMenu}
        />

        <Header
          searchIsShowing={this.state.searchIsShowing}
          showSearch={this.showSearch}
          hideSearch={this.hideSearch}
          showMenu={this.showMenu}
          queue={this.state.queue}
        />

        <div>
          {
            this.state.searchIsShowing && (
              <Search
                searchingByPhone={this.state.searchingByPhone}
                searchingByTag={this.state.searchingByTag}
                searchByPhone={this.searchByPhone}
                searchByTag={this.searchByTag}
                addToQueue={this.addToQueue}
              />
            )
          }

          {
            !this.state.searchIsShowing && (
              <Queue
                queue={this.state.queue}
                myQueue={this.state.myQueue}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
