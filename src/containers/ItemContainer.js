import { connect } from 'react-redux'

import { wsAddToQueue } from '../actions/connection'
import Item from '../Item'

function mapDispatchToProps(dispatch) {
  return {
    wsAddToQueue: (patron, ids) => dispatch(wsAddToQueue(patron, ids)),
  }
}

const ItemContainer = connect(null, mapDispatchToProps)(Item)
export default ItemContainer
