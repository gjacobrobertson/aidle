import React, {PropTypes} from 'react'
import Guess from './Guess'

const GuessList = ({guesses}) => {
  const style = {
    flex: 1,
    overflowY: 'auto'
  }

  const items = guesses.map(({value, score}, idx) =>
    <Guess key={guesses.length - idx} value={value} score={score} />
  )

  return (
    <div className='guess-list' style={style}>
      {items}
    </div>
  )
}

GuessList.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.shape(Guess.propTypes)).isRequired
}

export default GuessList
