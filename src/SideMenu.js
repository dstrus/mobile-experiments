import React from 'react'

import './SideMenu.css'

function SideMenu(props) {
  let className = 'SideMenu'
  if (props.show) {
    className += ' visible'
  }

  return (
    <div className="container">
      {
        props.show && (
          <div className="overlay" onClick={props.hideMenu}></div>
        )
      }
      <div className={className}>
        <ul>
          <li>Something</li>
          <li>Sign out</li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
