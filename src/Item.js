import React from 'react'

import './Item.css'

export default function Item(props) {
  return (
    <div className="Item">
      <div>
        <img src={props.tag.photo} alt={props.tag.number} />
        <div
          className={`tagNumber ${props.tag.color}`}
        >
          <h2 className={`tagNumber ${props.tag.color}`}>{props.tag.number}</h2>
        </div>
      </div>
    </div>
  )
}
