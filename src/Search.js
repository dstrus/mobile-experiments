import React from 'react'

import Segment from './Segment'
import ItemList from './ItemList'

import './Search.css'

function Search(props) {
  const segmentStyle = {
    width: '50%',
    fontSize: '12px',
    height: '1.5rem'
  }

  return (
    <div className="Search">
      <form>
        <input
          autoFocus
          type="tel"
          placeholder="Search"
        />
      </form>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <Segment
          first
          style={segmentStyle}
          active={props.searchingByPhone}
          onClick={props.searchByPhone}
        >
          Phone
        </Segment>
        <Segment
          last
          style={segmentStyle}
          active={props.searchingByTag}
          onClick={props.searchByTag}
        >
          Tag
        </Segment>
      </div>

      <ItemList />
    </div>
  )
}

export default Search
