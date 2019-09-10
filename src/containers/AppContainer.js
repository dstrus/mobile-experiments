import { connect } from 'react-redux'

import { signIn } from '../actions'

import App from '../App'

function mapStateToProps(state) {
  return {
    uid: state.auth.uid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(signIn())
  } 
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
