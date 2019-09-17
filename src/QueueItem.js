import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons'

import './QueueItem.css'

function QueueItem(props) {
  const { patron } = props

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
          src={patron.avatar}
          alt=""
          onError={onError}
        />
        <FontAwesomeIcon icon={faUser} className="hidden" />
        <div className="phone">{patron.phone}</div>
      </div>

      <div className="details">
        <div className="tags">
          {
            patron.tags.filter(tag => tag.queueEntryId).map((tag, i) => {
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
        patron[props.disabledWhen]
          ? <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
          : renderReturnButton()
      }
    </div>
  )
}

export default QueueItem
