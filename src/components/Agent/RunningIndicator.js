import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import muiThemeable from 'material-ui/styles/muiThemeable'

const RunningIndicator = ({on, muiTheme}) => {
  const style = {
    borderRadius: 0,
    backgroundColor: muiTheme.palette.borderColor
  }
  if (on) {
    return <LinearProgress key='on' style={style} mode='indeterminate' />
  } else {
    return <LinearProgress key='off' style={style} mode='determinate' />
  }
}

export default muiThemeable()(RunningIndicator)
