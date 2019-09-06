import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import PageSelector from './PageSelector'

import './Header.css'

function Header (props) {
  return (
    <header className="Header">
      <a onClick={props.showMenu}>
        <FontAwesomeIcon icon={faBars} />
      </a>
      <PageSelector {...props} />
    </header>
  )
}

export default Header
