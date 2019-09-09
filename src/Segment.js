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

  if (props.to) {
    return (
      <NavLink to={props.to} className={className}>
        {props.children}
      </NavLink>
    )
  }

  if (props.active) {
    className += ' active'
  }

  return (
    <button type="button" className={className} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Segment
