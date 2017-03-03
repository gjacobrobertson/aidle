import React, { PropTypes } from 'react'
import Editor from './Editor'
import Controls from './Controls'
import RunningIndicator from './RunningIndicator'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Snackbar from 'material-ui/Snackbar'
import { redA100 } from 'material-ui/styles/colors'

const Agent = ({ program, setProgram, error, setError, running, start, stop, muiTheme }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    borderColor: muiTheme.palette.borderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderLeftWidth: 2
  }

  const errorStyle = {
    backgroundColor: redA100
  }

  return (
    <div className='agent' style={style}>
      <Controls start={start} stop={stop} />
      <RunningIndicator on={running} />
      <Editor value={program} onChange={setProgram} />
      <Snackbar
        open={error !== null}
        message={error ? error.toString() : ''}
        onRequestClose={() => setError(null)}
        bodyStyle={errorStyle}
      />
    </div>
  )
}

Agent.propTypes = {
  program: PropTypes.string.isRequired,
  setProgram: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired
}

export default muiThemeable()(Agent)
