import { connect } from 'react-redux'
import { agent as actions } from '../../actions'
import { AgentEditor } from '../../components'

const mapStateToProps = ({agent: { program }}) => ({ value: program })

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (program) => dispatch(actions.setProgram(program))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentEditor)
