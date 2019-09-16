import { connect } from 'react-redux'

import CheckinDetails from '../CheckinDetails'

function mapStateToProps(state) {
  return {
    queue: state.queue,
    checkins: state.search.checkins,
  }
}
const CheckinDetailsContainer = connect(mapStateToProps)(CheckinDetails)
export default CheckinDetailsContainer
