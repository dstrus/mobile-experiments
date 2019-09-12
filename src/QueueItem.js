import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './QueueItem.css'

function QueueItem(props) {
  const { patron } = props

  const renderReturnButton = () => {
    return (
      <div>
        <button onClick={() => props.action(props.patron)} disabled={props.patron[props.disabledWhen]}>
          {props.actionLabel}
        </button>
        <p>KIOSK A</p>
      </div>
    )
  }

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
                <div className={`tag ${tag.color}`} key={i}>
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

      {
        patron[props.disabledWhen]
          ? <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
          : renderReturnButton()
      }
    </div>
  )
}

export default QueueItem
