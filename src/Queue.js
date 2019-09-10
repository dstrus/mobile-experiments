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
              <span role="img" aria-label="">🎉</span> The queue is empty! <span role="img" aria-label="">🎉</span>
            </div>

          : <div className="listContainer">
              <h2>My Items (0)</h2>
              <p>Select items from below to add to my items.</p>
              <h2>All Items ({props.queue.length})</h2>
              <QueueItemList patrons={props.queue} />
            </div>
      }


    </div>
  )
}

export default Queue
