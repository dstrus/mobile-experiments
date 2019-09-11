import React from 'react'

import QueueItem from './QueueItem'
import './QueueItemList.css'

function QueueItemList({ patrons, ...props }) {
  return (
    <div className="QueueItemList">
      {
        patrons.length > 0 && (
          patrons.map(patron => (
            <QueueItem
              patron={patron}
              key={patron.id}
              {...props}
            />
          ))
        )
      }
      {
        patrons.length === 0 && (
          <p>There are no items in this list.</p>
        )
      }
    </div>
  )
}

export default QueueItemList
