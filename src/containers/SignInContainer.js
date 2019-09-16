import { connect } from 'react-redux'

import { signIn } from '../actions'
import SignIn from '../SignIn'

function mapDispatchToProps(dispatch) {
  return {
    signIn: (checkin) => dispatch(signIn(checkin))
  }
}

const SignInContainer = connect(null, mapDispatchToProps)(SignIn)
export default SignInContainer
