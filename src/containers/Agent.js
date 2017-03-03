import { connect } from 'react-redux';
import * as actions from '../actions';
import { Agent } from '../components';

const mapStateToProps = ({agent}) => (
  {
    program: agent.program,
    error: agent.error,
    running: agent.isRunning()
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    setProgram: (program) => dispatch(actions.agent.setProgram(program)),
    setError: (error) => dispatch(actions.agent.setError(error)),
    start: () => dispatch(actions.agent.start()),
    stop: () => dispatch(actions.agent.stop())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Agent)