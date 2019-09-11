import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faTag, faSearch } from '@fortawesome/free-solid-svg-icons'

import { patrons } from './lib/patrons'
import Header from './containers/HeaderContainer'
import Segment from './Segment'
import SearchResultList from './containers/SearchResultListContainer'

import './Search.css'

function Search(props) {
  const onChange = ev => {
    const term = ev.target.value
    props.setSearchTerm(term)

    let results = []
    if (term.length > 0) {
      results = patrons.filter(patron => patron.phone.replace(/\D/g,'').includes(term))
    }

    props.setSearchResults(results)
  }

  let searchPlaceholder = 'Search'

  if (props.match.params.by) {
    searchPlaceholder += ` by ${props.match.params.by}`
  }

  return (
    <>
      <Header />
      <div className="Search">
        <form>
          <div>
            <Segment
              first
              to="/search/phone"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Segment>
            <Segment
              last
              active={props.searchingByTag}
              to="/search/tag"
            >
              <FontAwesomeIcon icon={faTag} />
            </Segment>
          </div>

          <div className="inputContainer">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              autoFocus
              type="tel"
              placeholder={searchPlaceholder}
              onChange={onChange}
              value={props.term}
            />
          </div>
        </form>

        <SearchResultList />
      </div>
    </>
  )
}

export default withRouter(Search)
