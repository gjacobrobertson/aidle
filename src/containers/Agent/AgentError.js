import { connect } from 'react-redux'
import * as actions from '../../actions'
import { AgentError } from '../../components'

const mapStateToProps = ({ agent: { error } }) => ({ error })

const mapDispatchToProps = (dispatch) => {
  return {
    setError: (error) => dispatch(actions.agent.setError(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentError)
