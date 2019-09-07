import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import './Item.css'

class Item extends Component {
  render() {
    const patron = this.props.data

    return (
      <div className="Item">
        <img src={`/assets/${patron.id}.jpg`} alt={patron.name} />

        <div>
          <div className="phone">{patron.phone}</div>
          <small>Arrival: 10/13/19 @12:50pm</small><br />
          <small>Tags: 56, 89, 100</small>
          <p>KIOSK A</p>
        </div>

        <button>
          <div>
            <FontAwesomeIcon icon={faBars} className="menu" />
            <FontAwesomeIcon icon={faPlusCircle} className="circle" />
          </div>
          queue
        </button>
      </div>
    )
  }
}

export default Item
