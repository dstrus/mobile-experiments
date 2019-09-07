import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import PageSelector from './PageSelector'

import './Header.css'

function Header (props) {
  return (
    <header className="Header">
      <PageSelector {...props} />

      <a onClick={props.showMenu}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </a>
    </header>
  )
}

export default Header
