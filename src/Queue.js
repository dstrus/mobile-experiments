import React from 'react'

import QueueItemList from './QueueItemList'
import Header from './containers/HeaderContainer'
import './Queue.css'

function Queue(props) {
  return (
    <div className="Queue">
      <Header />
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
