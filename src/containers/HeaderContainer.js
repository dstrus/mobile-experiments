import { connect } from 'react-redux'

import { signOut } from '../actions'
import Header from '../Header'

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut())
  }
}

const HeaderContainer = connect(null, mapDispatchToProps)(Header)
export default HeaderContainer
