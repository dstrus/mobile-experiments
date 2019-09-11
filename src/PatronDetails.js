import React from 'react'
import { faArrowLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import Item from './Item'
import { patrons } from './lib/patrons'
import './PatronDetails.css'

function PatronDetails(props) {
  const patron = patrons.find(patron => patron.id.toString() === props.match.params.id)
  
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
            src={`/assets/${patron.id}.jpg`}
            alt={patron.phone}
          />
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
              <Item tag={tag} />
            ))
          }
        </div>
      </div>
      <div className="footer">
        <button>Return Items</button>
        <button>Return Items</button>
      </div>
    </div>
  )
}

export default withRouter(PatronDetails)
