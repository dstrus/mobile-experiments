import { connect } from 'react-redux'

import { returnAllItems } from '../actions'
import QueueItem from '../QueueItem'

function mapDispatchToProps(dispatch) {
  return {
    returnAllItems: (patron) => dispatch(returnAllItems(patron))
  }
}

const QueueItemContainer = connect(null, mapDispatchToProps)(QueueItem)
export default QueueItemContainer
