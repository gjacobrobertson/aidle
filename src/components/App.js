import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Tabs, Tab } from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import { SplitView, TabTemplate } from '../components'
import { Game, Agent, Settings } from '../containers'

const App = ({ muiTheme }) => {

  const styles = {
    root: {
      backgroundColor: muiTheme.palette.canvasColor,
      color: muiTheme.palette.textColor,
      fontFamily: muiTheme.fontFamily,
      height: '100%',
      display: 'flex'
    },
    pane: {
      flex: '0 0 50%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    tab: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }

  return (
    <div style={styles.root}>
      <Tabs
        style={styles.pane}
        contentContainerStyle={styles.tab}
        tabTemplate={TabTemplate}>
        <Tab icon={<FontIcon className="material-icons">games</FontIcon>}>
          <Game />
        </Tab>
        <Tab icon={<FontIcon className="material-icons">settings</FontIcon>}>
          <Settings />
        </Tab>
      </Tabs>
      <Agent style={styles.pane}/>
    </div>
  )
}

export default muiThemeable()(App)
