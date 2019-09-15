import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'

import './SearchResult.css'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.imgRef = React.createRef()
    this.state = {
      loading: false
    }
  }

  onClick = () => {
    this.setState({ loading: true })
    this.cloneImage()
  }

  onError = () => {
    const img = this.imgRef.current
    const container = img.parentElement
    const icon = container.querySelector('svg')

    img.classList.add('hidden')
    icon.classList.remove('hidden')
    container.classList.add('iconShowing')
  }

  goToDetails = () => {
    this.props.history.push(`/patrons/${this.props.patron.id}`)
  }

  cloneImage = () => {
    // Get the position of the original image
    const img = this.imgRef.current
    const rect = img.getBoundingClientRect()

    // Create and position the new image
    const newImg = img.cloneNode()
    newImg.classList.add('clone')
    newImg.style.marginTop = `${rect.top}px`
    newImg.style.marginLeft = `${rect.left}px`

    // Append and animate the new image
    document.body.appendChild(newImg)
    window.setTimeout(
      () => {
        newImg.classList.add('animated')
      },
      100
    )

    // Hide the new image after 0.6s
    window.setTimeout(
      () => {
        newImg.classList.add('hidden')
        this.props.addToQueue(this.props.patron)
        this.setState({ loading: false })
      },
      600
    )
  }

  phoneSpan = () => {
    const phone = this.props.patron.phone
    const term = this.props.term

    if (this.props.searchBy !== 'phone') {
      return phone
    }

    return this.highlight(term, phone)
  }

  tagSpan = () => {
    const tags = this.props.patron.tags.map(tag => tag.number).join(' ')
    const term = this.props.term

    if (this.props.searchBy !== 'tag' || tags.indexOf(term) === -1) {
      return this.props.patron.tags.map(tag => <span key={tag.id} className={`tag ${tag.color}`}>{tag.number}</span>)
    }

    return this.props.patron.tags.map(tag => (
      <span key={tag.id} className={`tag ${tag.color}`}>{this.highlight(term, tag.number)}</span>
    ))
  }

  highlight = (needle, haystack) => {
    const i = haystack.indexOf(needle)

    if (i === -1) {
      return haystack
    }

    const first = haystack.substr(0, i)
    const middle = haystack.substr(i, needle.length)
    const last = haystack.substr(i + needle.length)

    return <span>{first}<strong className="highlight">{middle}</strong>{last}</span>
  }

  renderQueueButton = () => {
    const { patron } = this.props

    return (
      <button onClick={this.onClick} disabled={patron.isQueued || this.state.loading}>
        {
          this.state.loading && (
            <FontAwesomeIcon icon={faSpinner} className="rotating" />
          )
        }

        {
          !this.state.loading && !patron.isQueued && 'QUEUE'
        }
      </button>
    )
  }

  render() {
    const { patron } = this.props

    return (
      <div className="SearchResult">
        <div
          className="imgContainer"
          onClick={this.goToDetails}
        >
          <img
            className="patron"
            src={patron.avatar}
            alt=""
            ref={this.imgRef}
            onError={this.onError}
          />
          <FontAwesomeIcon icon={faUser} className="hidden" />
        </div>

        <div
          className="details"
          onClick={this.goToDetails}
        >
          <div className="phone">{this.phoneSpan()}</div>
          <p>KIOSK A</p>
          <div className="tags">{this.tagSpan()}</div>
        </div>

        {
          !this.state.loading && patron.isQueued
            ? <div className="check"><FontAwesomeIcon icon={faCheck} /></div>
            : this.renderQueueButton()
        }


      </div>
    )
  }
}

export default withRouter(SearchResult)
