import React from 'react'

import SearchResult from './SearchResult'

import './SearchResultList.css'

function SearchResultList(props) {
  const data = [
    { id: 1, phone: 'XXX-XX4-7609' },
    { id: 2, phone: 'XXX-XX4-7609' },
    { id: 3, phone: 'XXX-XX4-7609' },
    { id: 4, phone: 'XXX-XX4-7609' },
    { id: 5, phone: 'XXX-XX4-7609' },
    { id: 6, phone: 'XXX-XX4-7609' },
    { id: 7, phone: 'XXX-XX4-7609' },
    { id: 8, phone: 'XXX-XX4-7609' },
    { id: 9, phone: 'XXX-XX4-7609' },
    { id: 10, phone: 'XXX-XX4-7609' },
  ]
  return (
    <div className="SearchResultList">
      {
        data.map(
          dino => (
            <SearchResult
              data={dino}
              key={dino.id}
              incrementQueue={props.incrementQueue}
            />
          )
        )
      }
    </div>
  )
}

export default SearchResultList
