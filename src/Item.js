import React from 'react'

import './Item.css'

export default function Item(props) {
  return (
    <div className="Item">
      <div>
        <img src={props.tag.photo} alt={props.tag.number} />
        <div 
          className="tagNumber" 
          style={{ backgroundColor: `${props.tag.color}`, border: props.tag.color === '#fff' ? '1px solid black' : '' }}>
          <h2 style={{ color: props.tag.color === '#fff' ? 'black' : '' }}>{props.tag.number}</h2>
        </div>
      </div>
    </div>
  )
}
