import React, { PropTypes } from 'react'
import Editor from './Editor'
import Controls from './Controls'
import RunningIndicator from './RunningIndicator'
import Snackbar from 'material-ui/Snackbar'
import { redA100 } from 'material-ui/styles/colors'

const Agent = ({ style, program, setProgram, error, setError, running, start, stop }) => {
  const styles = {
    root: {
      ...style,
      display: 'flex',
      flexDirection: 'column',
    },
    error: {
      backgroundColor: redA100
    }
  }

  return (
    <div className='agent' style={styles.root}>
      <Controls start={start} stop={stop} running={running} />
      <Editor value={program} onChange={setProgram} />
      <Snackbar
        open={error !== null}
        message={error ? error.toString() : ''}
        onRequestClose={() => setError(null)}
        bodyStyle={styles.error}
      />
    </div>
  )
}

Agent.propTypes = {
  program: PropTypes.string.isRequired,
  setProgram: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default (Agent)
