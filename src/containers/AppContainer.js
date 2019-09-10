import { connect } from 'react-redux'

import App from '../App'

function mapStateToProps(state) {
  return {
    uid: state.auth.uid
  }
}

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer
