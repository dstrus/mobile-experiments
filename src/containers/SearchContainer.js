import { connect } from 'react-redux'

import { setSearchResults, setSearchTerm, setSearchBy } from '../actions'
import Search from '../Search'

function mapStateToProps(state) {
  return {
    term: state.search.term,
    searchBy: state.search.by,
    patrons: state.search.patrons,
    results: state.search.results,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchResults: (results) => dispatch(setSearchResults(results)),
    setSearchTerm: (term) => dispatch(setSearchTerm(term)),
    setSearchBy: (by) => dispatch(setSearchBy(by))
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default SearchContainer
