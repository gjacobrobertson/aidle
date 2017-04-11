import React, { PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar'
import { redA100 } from 'material-ui/styles/colors'

const style = {
  backgroundColor: redA100
}

const AgentError = ({error, setError}) => {
  return <Snackbar
    open={error !== null}
    message={error ? error.toString() : ''}
    onRequestClose={() => setError(null)}
    bodyStyle={style}
  />
}

AgentError.propTypes = {
  setError: PropTypes.func.isRequired,
  error: PropTypes.object
}

export default AgentError
