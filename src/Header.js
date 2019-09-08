import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

import PageSelector from './PageSelector'

import './Header.css'

function Header (props) {
  return (
    <header className="Header">
      <PageSelector {...props} />

      <div>
        <button className="reload" onClick={() => window.location.reload()}>
          <FontAwesomeIcon icon={faRedoAlt} />
        </button>
        <button className="signOut" onClick={props.showMenu}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  )
}

export default Header
