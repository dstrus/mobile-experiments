import React from 'react'
import { withRouter } from 'react-router-dom'

import { patrons } from './lib/patrons'

function PatronDetails(props) {
  const patron = {}
  // const patron = patrons.find(patron => patron.id === props.match.params.id)
  
  return (
    <div className="PatronDetails">
      <h2>Details</h2>
      <div>
        <img
          className="patron"
          src={`/assets/${patron.id}.jpg`}
          alt={patron.phone}
        />
        <h5>{patron.phone}</h5>
        <h6>Arrival: 10/04/19 @12:30pm</h6>
        <h6>6 items</h6>
        <h5>KIOSK A</h5>
      </div>
    </div>

  )
}

export default withRouter(PatronDetails)
