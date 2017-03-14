import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Tabs, Tab } from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import { SplitView, TabTemplate } from '../components'
import { Game, Agent } from '../containers'

const App = ({ muiTheme }) => {

  const styles = {
    root: {
      backgroundColor: muiTheme.palette.canvasColor,
      color: muiTheme.palette.textColor,
      fontFamily: muiTheme.fontFamily,
      height: '100%',
      display: 'flex'
    },
    tabs: {
      flex: '0 0 50%',
      display: 'flex',
      flexDirection: 'column'
    },
    tabContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }

  return (
    <div style={styles.root}>
      <Tabs
        style={styles.tabs}
        contentContainerStyle={styles.tabContent}
        tabTemplate={TabTemplate}>
        <Tab icon={<FontIcon className="material-icons">games</FontIcon>}>
          <Game />
        </Tab>
        <Tab icon={<FontIcon className="material-icons">settings</FontIcon>}>
          <p> Settings Placeholder </p>
        </Tab>
      </Tabs>
      <Agent />
    </div>
  )
}

export default muiThemeable()(App)
