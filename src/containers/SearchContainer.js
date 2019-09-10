import { connect } from 'react-redux'

import { setSearchResults } from '../actions'
import Search from '../Search'

function mapDispatchToProps(dispatch) {
  return {
    setSearchResults: (patron) => dispatch(setSearchResults(patron))
  }
}

const SearchContainer = connect(null, mapDispatchToProps)(Search)
export default SearchContainer
