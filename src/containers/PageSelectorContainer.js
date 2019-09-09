import { connect } from 'react-redux'

import PageSelector from '../PageSelector'

function mapStateToProps(state) {
  return {
    queue: state.queue
  }
}

const PageSelectorContainer = connect(mapStateToProps)(PageSelector)
export default PageSelectorContainer
