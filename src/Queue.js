import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons'

import QueueItemList from './QueueItemList'
import Header from './containers/HeaderContainer'
import './Queue.css'

function Queue(props) {
  return (
    <div className="Queue">
      <Header />
      <div className="queue-sub-header">
        <span className="criterion">
          All
          <button><FontAwesomeIcon icon={faTimes} /></button>
        </span>
        <button className="icon-button"><FontAwesomeIcon icon={faFilter} /></button>
      </div>
      {
        props.queue.length === 0
          ? <div className="blankSlate">
              <span role="img" aria-label="">🎉</span> The queue is empty! <span role="img" aria-label="">🎉</span>
            </div>

          : <>
              <h2>My Items</h2>
              <p>Select items from below to add to my items.</p>
              <h2>All Items</h2>
              <QueueItemList patrons={props.queue} />
            </>
      }


    </div>
  )
}

export default Queue
