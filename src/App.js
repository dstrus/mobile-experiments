import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import SideMenu from './SideMenu'

import './App.css';

class App extends Component {
  state = {
    searchIsShowing: true,
    searchingByPhone: true,
    searchingByTag: false,
    menuIsShowing: false,
    queueLength: 1,
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

  incrementQueue = () => {
    this.setState((state, props) => {
      this.setState({ queueLength: state.queueLength + 1 })
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
          queueLength={this.state.queueLength}
        />

        <div>
          {
            this.state.searchIsShowing && (
              <Search
                searchingByPhone={this.state.searchingByPhone}
                searchingByTag={this.state.searchingByTag}
                searchByPhone={this.searchByPhone}
                searchByTag={this.searchByTag}
                incrementQueue={this.incrementQueue}
              />
            )
          }

          {
            !this.state.searchIsShowing && (
              <div>Queue!</div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
