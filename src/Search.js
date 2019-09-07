import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faTag, faSearch } from '@fortawesome/free-solid-svg-icons'

import Segment from './Segment'
import ItemList from './ItemList'

import './Search.css'

function Search(props) {
  const segmentStyle = {
    // width: '50%',
    fontSize: '12px',
    height: '1.75rem'
  }

  return (
    <div className="Search">
      <form>
        <div>
          <Segment
            first
            style={segmentStyle}
            active={props.searchingByPhone}
            onClick={props.searchByPhone}
          >
            <FontAwesomeIcon icon={faPhoneAlt} />
          </Segment>
          <Segment
            last
            style={segmentStyle}
            active={props.searchingByTag}
            onClick={props.searchByTag}
          >
            <FontAwesomeIcon icon={faTag} />
          </Segment>
        </div>

        <div className="input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            autoFocus
            type="tel"
            placeholder="Search"
          />
        </div>
      </form>

      <ItemList incrementQueue={props.incrementQueue} />
    </div>
  )
}

export default Search
