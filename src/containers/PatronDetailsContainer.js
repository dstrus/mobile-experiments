import { connect } from 'react-redux'

import { wsAddToQueue } from '../actions/connection'
import PatronDetails from '../PatronDetails'

function mapStateToProps(state) {
  return {
    queue: state.queue,
    patrons: state.search.patrons,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    wsAddToQueue: (patron, ids) => dispatch(wsAddToQueue(patron, ids)),
  }
}

const PatronDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(PatronDetails)
export default PatronDetailsContainer
