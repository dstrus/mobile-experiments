import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { queuedTagIds: [] }
  }

  handleClick = (tagId) => {
    console.log(tagId)
    this.setState(
      { queuedTagIds: [...this.state.queuedTagIds, tagId] },
      () => this.props.wsAddToQueue(this.props.patron, this.state.queuedTagIds)
    )
  }

  render() {
    return (
      <div className="Item">
        <div style={{ opacity: this.props.enqueued ? '0.5' : ''}}>
          {
            this.props.enqueued && <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
          }
          <img 
            src={this.props.tag.photo}
            alt={this.props.tag.number}
            onClick={() => this.handleClick(this.props.tag.id)}
          />
          <div className={`tagNumber ${this.props.tag.color}`}>
            <h2 className={`tagNumber ${this.props.tag.color}`}>{this.props.tag.number}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
