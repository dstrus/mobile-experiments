import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'

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

  render() {
    const { patron } = this.props

    return (
      <div className="SearchResult">
        <div className="imgContainer">
          <img
            className="patron"
            src={`/assets/${patron.id}.jpg`}
            alt={patron.phone}
            ref={this.imgRef}
            onClick={this.goToDetails}
          />
        </div>

        <div>
          <div className="phone">{patron.phone}</div>
          <p>KIOSK A</p>
        </div>

        <button onClick={this.onClick} disabled={patron.isQueued || this.state.loading}>
          {
            this.state.loading && (
              <FontAwesomeIcon icon={faSpinner} className="rotating" />
            )
          }

          {
            !this.state.loading && patron.isQueued && (
              <FontAwesomeIcon icon={faCheck} />
            )
          }

          {
            !this.state.loading && !patron.isQueued && 'QUEUE'
          }
        </button>
      </div>
    )
  }
}

export default withRouter(SearchResult)
