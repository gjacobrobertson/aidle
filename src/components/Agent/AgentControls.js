import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import FontIcon from 'material-ui/FontIcon'
import {green500, red500} from 'material-ui/styles/colors'
import If from '../If'

const AgentControls = ({parent, stop, start, running}) => {
  parent = parent || <div/>
  return React.cloneElement(
    parent,
    null,
    <FontIcon className='material-icons' onClick={start} color={green500}>play_arrow</FontIcon>,
    <FontIcon className='material-icons' onClick={stop} color={red500}>stop</FontIcon>,
    <If condition={running} style={{ marginLeft: 24 }}>
      <CircularProgress size={24}/>
    </If>
  )
}

AgentControls.propTypes = {
  parent: PropTypes.element,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
}

export default AgentControls
