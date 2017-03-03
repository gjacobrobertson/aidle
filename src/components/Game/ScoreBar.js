import React, {PropTypes} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {green500} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable'

const ScoreBar = ({cash, muiTheme}) => {
  const style = {
    borderBottomWidth: 4,
    borderBottomStyle: 'solid',
    borderBottomColor: muiTheme.palette.borderColor,
    padding: 12,
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div className='score-bar' style={style}>
      <FontIcon className='material-icons' color={green500}>attach_money</FontIcon>
      <span>{cash}</span>
    </div>
  )
}

ScoreBar.propTypes = {
  cash: PropTypes.string.isRequired
}

export default muiThemeable()(ScoreBar)
