import { connect } from 'react-redux'

import { wsAddToQueue } from '../actions/connection'
import SearchResult from '../SearchResult'

function mapStateToProps(state) {
  return {
    term: state.search.term,
    searchBy: state.search.by
  }
}

function mapDispatchToProps(dispatch) {
  return {
    wsAddToQueue: (patron) => dispatch(wsAddToQueue(patron))
  }
}

const SearchResultContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResult)
export default SearchResultContainer
