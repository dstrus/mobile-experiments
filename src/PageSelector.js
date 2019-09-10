import React from 'react'
import { NavLink } from 'react-router-dom'

import './PageSelector.css'

function PageSelector(props) {
  return (
    <div className="PageSelector">
      <NavLink to="/search">
        <h3>Search</h3>
      </NavLink>

      <NavLink to="/queue">
        <h3>Queue</h3>
        {
          props.queue.length !== 0 && (
            <div className="badge">
              {props.queue.length}
            </div>
          )
        }
      </NavLink>
    </div>
  )
}

export default PageSelector
