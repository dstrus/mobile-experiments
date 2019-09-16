import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons'

import QueueItemList from './QueueItemList'
import Header from './containers/HeaderContainer'
import './Queue.css'

function Queue(props) {
  const myItems = props.queue.filter(checkin => checkin.isSelected)

  return (
    <div className="Queue">
      <Header />
      <div className="filterBar">
        <div className="filters">
          <span className="criterion">
            Tags 0-200
            <button><FontAwesomeIcon icon={faTimes} /></button>
          </span>

          <span className="criterion">
            KIOSK A
            <button><FontAwesomeIcon icon={faTimes} /></button>
          </span>
        </div>
        <button className="icon-button"><FontAwesomeIcon icon={faFilter} /></button>
      </div>
      {
        props.queue.length === 0
          ? <div className="blankSlate">
              <span role="img" aria-label="">🎉</span>&nbsp;The queue is empty!&nbsp;<span role="img" aria-label="">🎉</span>
            </div>

          : <div className="listContainer">
              <h2>My Items ({myItems.length})</h2>
              <QueueItemList
                checkins={myItems}
                disabledWhen='isReturned'
                actionLabel='RETURN'
                action={props.returnAllItems}
                blankMessage="Select items from below to add to My Items."
              />

              <h2>All Items ({props.queue.length})</h2>
              <QueueItemList
                checkins={props.queue}
                disabledWhen='isSelected'
                actionLabel='SELECT'
                action={props.selectCheckin}
                blankMessage="The queue is empty!"
              />
            </div>
      }


    </div>
  )
}

export default Queue
