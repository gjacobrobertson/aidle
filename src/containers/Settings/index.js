import { connect } from 'react-redux'
import { settings as actions } from '../../actions'
import { Settings } from '../../components'

const mapDispatchToProps = (dispatch) => ({ reset: (g) => dispatch(actions.reset()) })

export default connect(null, mapDispatchToProps)(Settings)
