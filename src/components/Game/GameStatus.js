import React, {PropTypes} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {green500} from 'material-ui/styles/colors'

const GameStatus = ({cash, completions}) => {
  const style = {
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div style={style}>
      <FontIcon className='material-icons'>star</FontIcon>
      <span>{completions}</span>
      <FontIcon className='material-icons' color={green500}>attach_money</FontIcon>
      <span>{cash}</span>
    </div>
  )
}

GameStatus.propTypes = {
  cash: PropTypes.string.isRequired,
  completions: PropTypes.number.isRequired
}

export default GameStatus
