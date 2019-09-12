import { connect } from 'react-redux'

import PatronDetails from '../PatronDetails'

function mapStateToProps(state) {
  return {
    queue: state.queue
  }
}
const PatronDetailsContainer = connect(mapStateToProps)(PatronDetails)
export default PatronDetailsContainer
