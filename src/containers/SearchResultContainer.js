import { connect } from 'react-redux'

import { addToQueue } from '../actions'
import SearchResult from '../SearchResult'

function mapDispatchToProps(dispatch) {
  return {
    addToQueue: (patron) => dispatch(addToQueue(patron))
  }
}

const SearchResultContainer = connect(null, mapDispatchToProps)(SearchResult)
export default SearchResultContainer
