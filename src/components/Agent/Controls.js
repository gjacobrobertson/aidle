import React, {PropTypes} from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import {green500, red500} from 'material-ui/styles/colors'

const Controls = ({running, stop, start}) => {
  return (
    <div className="controls">
      <IconButton>
        <FontIcon className="material-icons" onClick={start} color={green500}>play_arrow</FontIcon>
      </IconButton>
      <IconButton>
        <FontIcon className="material-icons" onClick={stop} color={red500}>stop</FontIcon>
      </IconButton>
    </div>
  )
}

Controls.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired
}

export default Controls