import { connect } from 'react-redux'

import SearchResultList from '../SearchResultList'

function mapStateToProps(state) {
  return {
    searchResults: state.search.results
  }
}

const SearchResultListContainer = connect(mapStateToProps)(SearchResultList)
export default SearchResultListContainer
