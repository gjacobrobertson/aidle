import React from 'react'
import { Game, Agent } from '../containers'
import muiThemeable from 'material-ui/styles/muiThemeable'

const App = ({muiTheme}) => {
  const style = {
    backgroundColor: muiTheme.palette.canvasColor,
    color: muiTheme.palette.textColor,
    fontFamily: muiTheme.fontFamily,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100%'
  }
  return (
    <div className='app' style={style}>
      <Game />
      <Agent />
    </div>
  )
}

export default muiThemeable()(App)
