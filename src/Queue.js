import React from 'react'

import QueueItemList from './QueueItemList'
import Header from './Header'
import './Queue.css'

function Queue(props) {
  return (
    <div className="Queue">
      <Header
        searchIsShowing={false}
        showSearch={() => {}}
        hideSearch={() => {}}
      />
      {/* <h2>My Items</h2>
      <QueueItemList patrons={props.myQueue} /> */}

      <h2>All Items</h2>
      <QueueItemList patrons={props.queue} />
    </div>
  )
}

export default Queue
