import React from 'react'
import { NavLink } from 'react-router-dom'

import './Segment.css'

function Segment(props) {

  let className = 'Segment'
  if (props.first) {
    className += ' first'
  }
  if (props.last) {
    className += ' last'
  }

  return (
    <NavLink to={props.to} style={props.style} className={className}>
      {props.children}
    </NavLink>
  )
}

export default Segment
