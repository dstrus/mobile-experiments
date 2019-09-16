import { connect } from 'react-redux'

import { returnAllItems, selectCheckin } from '../actions'
import Queue from '../Queue'

function mapStateToProps(state) {
  return {
    queue: state.queue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    returnAllItems: (checkin) => dispatch(returnAllItems(checkin)),
    selectCheckin: (checkin) => dispatch(selectCheckin(checkin))
  }
}

const QueueContainer = connect(mapStateToProps, mapDispatchToProps)(Queue)
export default QueueContainer
