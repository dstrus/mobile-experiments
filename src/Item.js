import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Item.css'

export default function Item(props) {
  return (
    <div className="Item">
      <div style={{ opacity: props.enqueued ? '0.5' : ''}}>
        {
          props.enqueued && <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
        }
        <img src={props.tag.photo} alt={props.tag.number}/>
        <div className={`tagNumber ${props.tag.color}`}>
          <h2 className={`tagNumber ${props.tag.color}`}>{props.tag.number}</h2>
        </div>
      </div>
    </div>
  )
}
