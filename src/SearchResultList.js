import React from 'react'

import SearchResult from './containers/SearchResultContainer'

import './SearchResultList.css'

function SearchResultList(props) {
  return (
    <div className="SearchResultList">
      {
        props.searchResults.map(
          patron => (
            <SearchResult
              patron={patron}
              key={patron.id}
              addToQueue={props.addToQueue}
            />
          )
        )
      }
    </div>
  )
}

export default SearchResultList
