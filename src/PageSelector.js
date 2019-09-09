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
        <FontAwesomeIcon
          style={{ color: 'white' }}
          icon={faSearch}
          size="1x"
        />
      </Segment>
      <Segment
        to="/queue"
        last
      >
        <FontAwesomeIcon
          style={{ color: 'white' }}
          icon={faBars}
          size="1x"
        />
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
