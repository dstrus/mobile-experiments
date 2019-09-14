import { connect } from 'react-redux'

import { signIn } from '../actions'
import * as connectionActions from '../actions/connection'

import App from '../App'

function mapStateToProps(state) {
  return {
    uid: state.auth.uid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(signIn()),
    wsConnect: () => dispatch(connectionActions.wsConnect())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
