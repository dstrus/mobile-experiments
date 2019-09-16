import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons'

import './QueueItem.css'

function QueueItem(props) {
  const { checkin } = props

  const onError = ev => {
    const img = ev.target
    const container = img.parentElement
    const icon = container.querySelector('svg')

    img.classList.add('hidden')
    icon.classList.remove('hidden')
    container.classList.add('iconShowing')
  }

  const renderReturnButton = () => {
    return (
      <div>
        <button onClick={() => props.action(props.checkin)} disabled={props.checkin[props.disabledWhen]}>
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
          className="checkin small"
          src={checkin.avatar}
          alt=""
          onError={onError}
        />
        <FontAwesomeIcon icon={faUser} className="hidden" />
        <div className="phone">{checkin.phone}</div>
      </div>

      <div className="details">
        <div className="tags">
          {
            checkin.tags.map((tag, i) => {
              return (
                <div className={`tag ${tag.color}`} key={i}>
                  <img
                    className="tag small"
                    src={tag.photo}
                    alt=""
                  />
                  <div className="number">{tag.number}</div>
                </div>
              )
            })
          }
        </div>

      </div>

      {
        checkin[props.disabledWhen]
          ? <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
          : renderReturnButton()
      }
    </div>
  )
}

export default QueueItem
