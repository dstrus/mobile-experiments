import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

import './QueueItem.css'

function QueueItem(props) {
  const { patron } = props
  return (
    <div className="QueueItem">
      <div className="imgContainer">
        <img
          className="patron small"
          src={`/assets/${patron.id}.jpg`}
          alt={patron.phone}
        />
        <div className="phone">{patron.phone}</div>
      </div>

      <div className="details">
        <div className="tags">
          {
            patron.tags.map((tag, i) => {
              return (
                <div className="tag" style={{ backgroundColor: tag.color }} key={i}>
                  <img
                    className="tag small"
                    src={tag.photo}
                    alt={patron.phone}
                  />
                  <div className="number">{tag.number}</div>
                </div>
              )
            })
          }
        </div>

      </div>

      <button onClick={() => props.returnAllItems(patron)}>
        <div>
          <FontAwesomeIcon icon={faShare} className="return" />
        </div>
        return all

        <p>KIOSK A</p>
      </button>
    </div>
  )
}

export default QueueItem
