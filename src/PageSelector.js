import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import Segment from './Segment'

import './PageSelector.css'

function PageSelector(props) {
  return (
    <div className="PageSelector">
      <Segment
        onClick={props.showSearch}
        active={props.searchIsShowing}
        first
      >
        <FontAwesomeIcon
          style={{ color: 'white' }}
          icon={faSearch}
          size="1x"
        />
      </Segment>
      <Segment
        onClick={props.hideSearch}
        active={!props.searchIsShowing}
        last
      >
        <FontAwesomeIcon
          style={{ color: 'white' }}
          icon={faBars}
          size="1x"
        />
        <div className="badge">
          {props.queueLength}
        </div>
      </Segment>
    </div>
  )
}

export default PageSelector
