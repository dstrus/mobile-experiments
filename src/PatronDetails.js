import React from 'react'
import { faArrowLeft, faEllipsisH, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import Item from './containers/ItemContainer'
import './PatronDetails.css'

function PatronDetails(props) {
  const patron = props.patrons.find(patron => patron.id.toString() === props.match.params.id)
  const patronIsInQueue = props.queue.find(queuedPatron => queuedPatron === patron)

  const onError = ev => {
    const img = ev.target
    const container = img.parentElement
    const icon = container.querySelector('svg')

    img.classList.add('hidden')
    icon.classList.remove('hidden')
    container.classList.add('iconShowing')
  }

  return (
    <div className="PatronDetails">
      <div>
        <div className="detailHeader">
          <button
            className="backArrow"
            onClick={() => props.history.goBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2>Details</h2>
          <button>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
        <div className="patronDetailsContainer">
          <img
            className="patron"
            src={patron.avatar}
            alt=""
            onError={onError}
          />
          <FontAwesomeIcon icon={faUser} className="hidden" />
          <div className="details">
            <h4>{patron.phone}</h4>
            <h6>Arrival: 10/04/19 @12:30pm</h6>
            <h6>6 items</h6>
            <h5>KIOSK A</h5>
          </div>
        </div>
        <div className="itemList">
          {
            patron.tags.map(tag => (
              <Item enqueued={patronIsInQueue} tag={tag} key={tag.id} patron={patron}/>
            ))
          }
        </div>
      </div>
      <div className="footer">
        <button>{patronIsInQueue ? 'return all' : 'return all'}</button>
        <button>{patronIsInQueue ? 'select all' : 'queue all'}</button>
      </div>
    </div>
  )
}

export default withRouter(PatronDetails)
