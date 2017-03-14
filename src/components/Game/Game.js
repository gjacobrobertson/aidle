import React from 'react'
import ScoreBar from './ScoreBar'
import GuessList from './GuessList'
import GuessControl from './GuessControl'

const Game = ({cash, guesses, onGuess}) => {
  const style = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div className='game' style={style}>
      <GuessList guesses={guesses} />
      <GuessControl onGuess={onGuess} />
    </div>
  )
}

export default Game
