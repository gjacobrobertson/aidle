import { connect } from 'react-redux'
import { settings as actions } from '../../actions'
import { Upgrades } from '../../components'

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({ reset: (g) => dispatch(actions.reset()) })

export default connect(mapStateToProps, mapDispatchToProps)(Upgrades)
