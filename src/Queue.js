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
              <h2>All Items</h2>
              <QueueItemList patrons={props.queue} />
            </>
      }


    </div>
  )
}

export default Queue
