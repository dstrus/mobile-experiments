import React from 'react'

import { patrons } from './lib/patrons'
import SearchResult from './SearchResult'

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
              incrementQueue={props.incrementQueue}
            />
          )
        )
      }
    </div>
  )
}

export default SearchResultList
