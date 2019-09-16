import React from 'react'

import QueueItem from './QueueItem'
import './QueueItemList.css'

function QueueItemList({ checkins, blankMessage, ...props }) {
  return (
    <div className="QueueItemList">
      {
        checkins.length > 0 && (
          checkins.map(checkin => (
            <QueueItem
              checkin={checkin}
              key={checkin.id}
              {...props}
            />
          ))
        )
      }
      {
        checkins.length === 0 && (
          <p>{blankMessage}</p>
        )
      }
    </div>
  )
}

export default QueueItemList
