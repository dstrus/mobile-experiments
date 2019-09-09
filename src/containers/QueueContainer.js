import { connect } from 'react-redux'

import Queue from '../Queue'

function mapStateToProps(state) {
  return {
    queue: state.queue
  }
}

const QueueContainer = connect(mapStateToProps)(Queue)
export default QueueContainer
