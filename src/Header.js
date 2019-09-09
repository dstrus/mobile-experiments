import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

import PageSelector from './containers/PageSelectorContainer'

import './Header.css'

class Header extends Component {
  state = {
    reloading: false
  }

  reload = () => {
    this.setState({ reloading: true })
    window.location.reload()
  }

  render() {
    let reloadClassName = 'reload'
    if (this.state.reloading) {
      reloadClassName += ' rotating'
    }

    return (
      <header className="Header">
        <PageSelector {...this.props} />

        <div>
          <button className={reloadClassName} onClick={this.reload}>
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
          <button className="signOut" onClick={this.props.showMenu}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      </header>
    )
  }
}

export default Header
