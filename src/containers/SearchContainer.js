import { connect } from 'react-redux'

import { setSearchResults, setSearchTerm } from '../actions'
import Search from '../Search'

function mapStateToProps(state) {
  return {
    term: state.search.term
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchResults: (patron) => dispatch(setSearchResults(patron)),
    setSearchTerm: (patron) => dispatch(setSearchTerm(patron))
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default SearchContainer
