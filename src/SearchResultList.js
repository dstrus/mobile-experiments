import React from 'react'

import { patrons } from './lib/patrons'
import SearchResult from './containers/SearchResultContainer'

import './SearchResultList.css'

function SearchResultList(props) {
  return (
    <div className="SearchResultList">
      {
        patrons.map(
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
