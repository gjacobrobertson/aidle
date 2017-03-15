import { connect } from 'react-redux'
import * as actions from '../../actions'
import { AgentControls } from '../../components'

const mapStateToProps = ({agent}) => ({ running: agent.isRunning()})

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(actions.agent.start()),
    stop: () => dispatch(actions.agent.stop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentControls)
