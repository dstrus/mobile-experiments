import { connect } from 'react-redux'

import { returnAllItems, selectPatron } from '../actions'
import QueueItem from '../QueueItem'

function mapDispatchToProps(dispatch) {
  return {
    returnAllItems: (patron) => dispatch(returnAllItems(patron)),
    selectPatron: (patron) => dispatch(selectPatron(patron))
  }
}

const QueueItemContainer = connect(null, mapDispatchToProps)(QueueItem)
export default QueueItemContainer
