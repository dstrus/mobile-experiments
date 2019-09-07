import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import './Item.css'

class Item extends Component {
  state = {
    queued: false,
    hidden: false,
  }

  onClick = () => {
    this.setState(
      { queued: true },
      () => {
        window.setTimeout(
          () => this.setState({ hidden: true }),
          300
        )
      }
    )
  }

  render() {
    const patron = this.props.data
    const queuedClass = this.state.queued ? 'queued' : ''
    const hiddenClass = this.state.hidden ? 'hidden' : ''
    const className = `Item ${queuedClass} ${hiddenClass}`

    return (
      <div className={className}>
        <img
          className="patron"
          src={`/assets/${patron.id}.jpg`}
          alt={patron.phone}
        />

        <div>
          <div className="phone">{patron.phone}</div>
          <small>Arrival: 10/13/19 @12:50pm</small><br />
          <small>Tags: 56, 89, 100</small>
          <p>KIOSK A</p>
        </div>

        <button onClick={this.onClick}>
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
