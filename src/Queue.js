import React from 'react'

import QueueItemList from './QueueItemList'
import './Queue.css'

function Queue(props) {
  return (
    <div className="Queue">
      {/* <h2>My Items</h2>
      <QueueItemList patrons={props.myQueue} /> */}

      <h2>All Items</h2>
      <QueueItemList patrons={props.queue} />
    </div>
  )
}

export default Queue
