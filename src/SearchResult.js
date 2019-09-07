import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import './SearchResult.css'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queued: false,
      hidden: false,
    }
    this.imgRef = React.createRef()
  }


  onClick = () => {
    this.cloneImage()

    this.setState(
      { queued: true },

      // Hide the SearchResult after 0.6s
      () => {
        window.setTimeout(
          () => this.setState({ hidden: true }),
          600
        )
      }
    )
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
        this.props.incrementQueue()
      },
      600
    )
  }

  render() {
    const { patron } = this.props
    const queuedClass = this.state.queued ? 'queued' : ''
    const hiddenClass = this.state.hidden ? 'hidden' : ''
    const className = `SearchResult ${queuedClass} ${hiddenClass}`

    return (
      <div className={className}>
        <div className="imgContainer">
          <img
            className="patron"
            src={`/assets/${patron.id}.jpg`}
            alt={patron.phone}
            ref={this.imgRef}
          />
        </div>

        <div>
          <div className="phone">{patron.phone}</div>
          <small>Arrival: 10/13/19 @12:50pm</small><br />
          <small>
            Tags:
            {
              patron.tags.map((tag, i) => {
                const prefix = i === 0 ? '' : ','
                return (<span>{prefix} {tag.number}</span>)
              })
            }
          </small>
          <p>KIOSK A</p>
        </div>

        <button onClick={this.onClick}>
          <div>
            <FontAwesomeIcon icon={faBars} className="menu" />
            <FontAwesomeIcon icon={faPlusCircle} className="circle" />
          </div>
          queue
        </button>
      </div>
    )
  }
}

export default SearchResult
