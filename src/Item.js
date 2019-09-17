import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Item.css'

function Item({ patron, queued, selected, tag, selectSingleItem }) {
  return (
    <div className="Item" >
      <div 
        style={{ opacity: (queued || selected) ? '0.5' : ''}}
        onClick={() => selectSingleItem(tag.id)}
      >
        {
          (queued || selected) && <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
        }
        <img 
          src={tag.photo}
          alt={tag.number}
        />
        <div className={`tagNumber ${tag.color}`}>
          <h2 className={`tagNumber ${tag.color}`}>{tag.number}</h2>
        </div>
      </div>
    </div>
  )
}

export default Item
