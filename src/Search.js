import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faTag, faSearch } from '@fortawesome/free-solid-svg-icons'

import Header from './Header'
import Segment from './Segment'
import SearchResultList from './containers/SearchResultListContainer'

import './Search.css'

function Search(props) {
  return (
    <>
      <Header
        searchIsShowing={true}
        showSearch={()=> {}}
        hideSearch={()=> {}}
      />
      <div className="Search">
        <form>
          <div>
            <Segment
              first
              active={props.searchingByPhone}
              onClick={props.searchByPhone}
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Segment>
            <Segment
              last
              active={props.searchingByTag}
              onClick={props.searchByTag}
            >
              <FontAwesomeIcon icon={faTag} />
            </Segment>
          </div>

          <div className="inputContainer">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              autoFocus
              type="tel"
              placeholder="Search"
            />
          </div>
        </form>

        <SearchResultList />
      </div>
    </>
  )
}

export default Search
