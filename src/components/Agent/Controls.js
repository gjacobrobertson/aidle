import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import {green500, red500} from 'material-ui/styles/colors'
import If from '../If'

const Controls = ({stop, start, running}) => {
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <FontIcon className='material-icons' onClick={start} color={green500}>play_arrow</FontIcon>
        <FontIcon className='material-icons' onClick={stop} color={red500}>stop</FontIcon>
      </ToolbarGroup>
      <ToolbarGroup>
        <If condition={running}>
          <CircularProgress size={24}/>
        </If>
      </ToolbarGroup>
    </Toolbar>
  )
}

Controls.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired
}

export default Controls
