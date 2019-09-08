import React from 'react'

import QueueItem from './QueueItem'
import './QueueItemList.css'

function QueueItemList(props) {
  return (
    <div className="QueueItemList">
      {
        props.patrons.length > 0 && (
          props.patrons.map(patron => (
            <QueueItem patron={patron} key={patron.id} />
          ))
        )
      }
      {
        props.patrons.length === 0 && (
          <p>There are no items in this list.</p>
        )
      }
    </div>
  )
}

export default QueueItemList
