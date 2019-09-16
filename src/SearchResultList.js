import React from 'react'

import SearchResult from './containers/SearchResultContainer'

import './SearchResultList.css'

function SearchResultList(props) {
  return (
    <div className="SearchResultList">
      {
        props.searchResults.map(
          checkin => (
            <SearchResult
              checkin={checkin}
              key={checkin.id}
              addToQueue={props.addToQueue}
            />
          )
        )
      }
    </div>
  )
}

export default SearchResultList
