import { connect } from 'react-redux'

import { signIn } from '../actions'
import * as connectionActions from '../actions/connection'

import App from '../App'

function mapStateToProps(state) {
  return {
    uid: state.auth.uid,
    connection: state.connection
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(signIn()),
    wsConnect: () => dispatch(connectionActions.wsConnect()),
    wsSubscribe: () => dispatch(connectionActions.wsSubscribe()),
    wsGetInitialData: () => dispatch(connectionActions.wsGetInitialData())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
