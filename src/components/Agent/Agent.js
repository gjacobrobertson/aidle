import React, { PropTypes } from 'react'
import Editor from './Editor'
import Controls from './Controls'
import RunningIndicator from './RunningIndicator'
import Snackbar from 'material-ui/Snackbar'
import { redA100 } from 'material-ui/styles/colors'

const Agent = ({ program, setProgram, error, setError, running, start, stop }) => {
  const style = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }

  const errorStyle = {
    backgroundColor: redA100
  }

  return (
    <div className='agent' style={style}>
      <Controls start={start} stop={stop} running={running} />
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

export default (Agent)
