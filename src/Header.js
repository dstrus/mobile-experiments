import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import PageSelector from './PageSelector'

import './Header.css'

function Header (props) {
  return (
    <header className="Header">
      <PageSelector {...props} />

      <button className="signOut" onClick={props.showMenu}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </header>
  )
}

export default Header
