import React from 'react'

import './Segment.css'

function Segment(props) {
  let active = props.active

  function onClick() {
    active = true
    props.onClick()
  }

  let className = 'Segment'
  if (props.first) {
    className += ' first'
  }
  if (props.last) {
    className += ' last'
  }
  if (active) {
    className += ' active'
  }

  return (
    <button type="button" style={props.style} className={className} onClick={onClick}>
      {props.children}
    </button>
  )
}

export default Segment
