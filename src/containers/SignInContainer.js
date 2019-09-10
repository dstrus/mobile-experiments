import { connect } from 'react-redux'

import { signIn } from '../actions'
import SignIn from '../SignIn'

function mapDispatchToProps(dispatch) {
  return {
    signIn: (patron) => dispatch(signIn(patron))
  }
}

const SignInContainer = connect(null, mapDispatchToProps)(SignIn)
export default SignInContainer
