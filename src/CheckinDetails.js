import React from 'react'
import { faArrowLeft, faEllipsisH, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import Item from './Item'
import './CheckinDetails.css'

function CheckinDetails(props) {
  const checkin = props.checkins.find(checkin => checkin.id.toString() === props.match.params.id)
  const checkinIsInQueue = props.queue.find(queuedCheckin => queuedCheckin === checkin)

  const onError = ev => {
    const img = ev.target
    const container = img.parentElement
    const icon = container.querySelector('svg')

    img.classList.add('hidden')
    icon.classList.remove('hidden')
    container.classList.add('iconShowing')
  }

  return (
    <div className="CheckinDetails">
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
        <div className="checkinDetailsContainer">
          <img
            className="checkin"
            src={checkin.avatar}
            alt=""
            onError={onError}
          />
          <FontAwesomeIcon icon={faUser} className="hidden" />
          <div className="details">
            <h4>{checkin.phone}</h4>
            <h6>Arrival: 10/04/19 @12:30pm</h6>
            <h6>6 items</h6>
            <h5>KIOSK A</h5>
          </div>
        </div>
        <div className="itemList">
          {
            checkin.tags.map(tag => (
              <Item enqueued={checkinIsInQueue} tag={tag} key={tag.id} />
            ))
          }
        </div>
      </div>
      <div className="footer">
        <button>{checkinIsInQueue ? 'return all' : 'return all'}</button>
        <button>{checkinIsInQueue ? 'select all' : 'queue all'}</button>
      </div>
    </div>
  )
}

export default withRouter(CheckinDetails)
