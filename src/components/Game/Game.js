import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import ScoreBar from './ScoreBar'
import GuessList from './GuessList'
import GuessControl from './GuessControl'

const Game = ({muiTheme, cash, guesses, onGuess}) => {
  const style = {
    backgroundColor: muiTheme.palette.canvasColor,
    borderColor: muiTheme.palette.borderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderRightWidth: 2,
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div className="game" style={style}>
      <ScoreBar cash={cash}/>
      <GuessList guesses={guesses}/>
      <GuessControl onGuess={onGuess}/>
    </div>
  )
}

export default muiThemeable()(Game)

