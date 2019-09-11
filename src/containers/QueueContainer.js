import { connect } from 'react-redux'

import { returnAllItems, selectPatron } from '../actions'
import Queue from '../Queue'

function mapStateToProps(state) {
  return {
    queue: state.queue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    returnAllItems: (patron) => dispatch(returnAllItems(patron)),
    selectPatron: (patron) => dispatch(selectPatron(patron))
  }
}

const QueueContainer = connect(mapStateToProps, mapDispatchToProps)(Queue)
export default QueueContainer
