import { connect } from 'react-redux'

import { addToQueue } from '../actions'
import SearchResult from '../SearchResult'

function mapStateToProps(state) {
  return {
    term: state.search.term,
    searchBy: state.search.by
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToQueue: (patron) => dispatch(addToQueue(patron))
  }
}

const SearchResultContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResult)
export default SearchResultContainer
