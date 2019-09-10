import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import Segment from './Segment'

import './PageSelector.css'

function PageSelector(props) {
  return (
    <div className="PageSelector">
      <Segment
        to="/search"
        first
      >
        <h3>Search</h3>
      </Segment>
      <Segment
        to="/queue"
        last
      >
        <h3>Queue</h3>
        {
          props.queue.length !== 0 && (
            <div className="badge">
              {props.queue.length}
            </div>
          )
        }
      </Segment>
    </div>
  )
}

export default PageSelector
