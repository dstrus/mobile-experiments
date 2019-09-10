import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faTag, faSearch } from '@fortawesome/free-solid-svg-icons'

import { patrons } from './lib/patrons'
import Header from './containers/HeaderContainer'
import Segment from './Segment'
import SearchResultList from './containers/SearchResultListContainer'

import './Search.css'

class Search extends Component {
  state = {
    searchTerm: ''
  }

  onChange = ev => {
    const searchTerm = ev.target.value
    this.setState({ searchTerm })

    let results = []
    if (searchTerm.length > 0) {
      results = patrons.filter(patron => patron.phone.replace(/\D/g,'').includes(searchTerm))
    }

    this.props.setSearchResults(results)
  }

  render () {
    let searchPlaceholder = 'Search'

    if (this.props.match.params.by) {
      searchPlaceholder += ` by ${this.props.match.params.by}`
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
                active={this.props.searchingByTag}
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
                onChange={this.onChange}
                value={this.state.searchTerm}
              />
            </div>
          </form>

          <SearchResultList />
        </div>
      </>
    )
  }
}

export default withRouter(Search)
