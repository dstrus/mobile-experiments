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
    search({ term })
  }

  const search = (constraints = {}) => {
    const term = constraints.term === undefined ? props.term : constraints.term
    const by = constraints.by || props.searchBy

    let results = []
    if (term.length > 0) {
      results = patrons.filter(patron => {
        if (by === 'phone') {
          return patron.phone.replace(/\D/g,'').includes(term)
        } else if (by === 'tag') {
          return patron.tags.findIndex(tag => tag.number.replace(/\D/g,'').includes(term)) > -1
        } else {
          return false
        }
      })
    }

    props.setSearchResults(results)
  }

  const searchBy = searchBy => {
    props.setSearchBy(searchBy)
    search({ by: searchBy })
    document.querySelector('input.search').focus()
  }

  let searchPlaceholder = 'Search'

  if (props.searchBy) {
    searchPlaceholder += ` by ${props.searchBy}`
  }

  return (
    <>
      <Header />
      <div className="Search">
        <form>
          <div>
            <Segment
              first
              active={props.searchBy === 'phone'}
              onClick={() => searchBy('phone')}
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Segment>
            <Segment
              last
              active={props.searchBy === 'tag'}
              onClick={() => searchBy('tag')}
            >
              <FontAwesomeIcon icon={faTag} />
            </Segment>
          </div>

          <div className="inputContainer">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              autoFocus
              className="search"
              type="tel"
              placeholder={searchPlaceholder}
              onChange={onChange}
              value={props.term}
            />
          </div>
        </form>

        {
          props.results.length === 0
            ? <div className="blankSlate">
                Type to begin searching.
              </div>

            : <SearchResultList />
        }
      </div>
    </>
  )
}

export default withRouter(Search)
