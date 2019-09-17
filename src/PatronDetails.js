import React, { Component } from 'react'
import { faArrowLeft, faEllipsisH, faUser, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import Item from './containers/ItemContainer'
import './PatronDetails.css'

const ASSIGN_TO_ME = 'assign to me'
const RETURN_ALL = 'return all'
const QUEUE_ALL = 'queue all'
const RETURN_SELECTED = 'return selected'
const QUEUE_SELECTED = 'queue selected'

class PatronDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTagIds: [] }
  }

  selectSingleItem = (tagId) => {
    const tagIsAlreadySelected = this.state.selectedTagIds.includes(tagId)
    if (tagIsAlreadySelected) {
      const updatedTagIds = this.state.selectedTagIds.filter(id => id !== tagId)
      this.setState({ selectedTagIds: updatedTagIds })
    } else {
      this.setState({ selectedTagIds: [...this.state.selectedTagIds, tagId] })
    }
  }

  handleClick = (e) => {
    if (e.target.innerHTML === QUEUE_SELECTED) {
      const patron = this.props.patrons.find(patron => patron.id.toString() === this.props.match.params.id)
      this.props.wsAddToQueue(patron, this.state.selectedTagIds)
    }
  }

  leftButtonText = () => {
    const patron = this.props.patrons.find(patron => patron.id.toString() === this.props.match.params.id)
    if (this.state.selectedTagIds.length > 0) {
      return RETURN_SELECTED
    } else if (this.state.selectedTagIds.length > 0 && this.state.selectedTagIds.length < patron.tags.length) {
      return QUEUE_SELECTED
    } else {
      return RETURN_ALL
    }
  }

  rightButtonText = () => {
    const patron = this.props.patrons.find(patron => patron.id.toString() === this.props.match.params.id)
    if (this.state.selectedTagIds.length === patron.tags.length) {
      return QUEUE_ALL
    } else if (this.state.selectedTagIds.length > 0 && this.state.selectedTagIds.length < patron.tags.length) {
      return QUEUE_SELECTED
    } else if (this.state.selectedTagIds.length === 0 && patron.isQueued) {
      return ASSIGN_TO_ME
    } else {
      return QUEUE_ALL
    }
  }

  onError = ev => {
    const img = ev.target
    const container = img.parentElement
    const icon = container.querySelector('svg')

    img.classList.add('hidden')
    icon.classList.remove('hidden')
    container.classList.add('iconShowing')
  }

  renderEmpty = () => {
    return <FontAwesomeIcon icon={faSpinner} />
  }

  render() {
    const patron = this.props.patrons.find(patron => patron.id.toString() === this.props.match.params.id)

    if (!patron) {
      return this.renderEmpty()
    }

    return (
      <div className="PatronDetails">
        <div>
          <div className="detailHeader">
            <button
              className="backArrow"
              onClick={() => this.props.history.goBack()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h2>Details</h2>
            <button>
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          </div>
          <div className="patronDetailsContainer">
            <img
              className="patron"
              src={patron.avatar}
              alt=""
              onError={this.onError}
            />
            <FontAwesomeIcon icon={faUser} className="hidden" />
            <div className="details">
              <h4>{patron.phone}</h4>
              <h6>Arrival: 10/04/19 @12:30pm</h6>
              <h6>6 items</h6>
              <h5>KIOSK A</h5>
            </div>
          </div>
          <div className="itemList">
            {
              patron.tags.map(tag => (
                <Item 
                  tag={tag}
                  key={tag.id}
                  patron={patron}
                  queued={tag.queueEntryId}
                  selected={this.state.selectedTagIds.includes(tag.id)}
                  selectSingleItem={this.selectSingleItem}
                />
              ))
            }
          </div>
        </div>
        <div className="footer">
          <button>
            { this.leftButtonText() }
          </button>
          <button onClick={(e) => this.handleClick(e)}>
            { this.rightButtonText() }
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(PatronDetails)
