import React, {PropTypes} from 'react'
import {green500} from 'material-ui/styles/colors'

const Guess = ({value, score}) => {
  const style = {
    padding: 12,
    textAlign: 'center',
    fontFamily: 'Roboto Mono, monospace'
  }
  return (
    <div style={style}>
      {value.map((char, index) =>
        <span key={index} style={score[index] ? {color: green500} : null}>{char || 'GO AWAY'}</span>)
      }
    </div>
  )
}

Guess.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  score: PropTypes.arrayOf(PropTypes.bool).isRequired
}

export default Guess
