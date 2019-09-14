import { connect } from 'react-redux'

import PatronDetails from '../PatronDetails'

function mapStateToProps(state) {
  return {
    queue: state.queue,
    patrons: state.search.patrons,
  }
}
const PatronDetailsContainer = connect(mapStateToProps)(PatronDetails)
export default PatronDetailsContainer
