import React from 'react'

import QueueItem from './QueueItem'
import './QueueItemList.css'

function QueueItemList({ patrons, blankMessage, ...props }) {
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
          <p>{blankMessage}</p>
        )
      }
    </div>
  )
}

export default QueueItemList
