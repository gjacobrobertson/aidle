import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import FontIcon from 'material-ui/FontIcon'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { SplitView, TabTemplate } from '../components'
import { AgentControls, AgentEditor, AgentError } from '../containers/Agent'
import { Game, GameStatus } from '../containers/Game'
import Settings from '../containers/Settings'

const App = ({ muiTheme }) => {

  const styles = {
    root: {
      backgroundColor: muiTheme.palette.canvasColor,
      color: muiTheme.palette.textColor,
      fontFamily: muiTheme.fontFamily,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    tab: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }

  return (
    <div style={styles.root}>
      <Toolbar>
        <AgentControls parent={<ToolbarGroup firstChild={true}/>}/>
        <ToolbarGroup>
          <GameStatus />
        </ToolbarGroup>
      </Toolbar>
      <Tabs
        style={styles.tab}
        contentContainerStyle={styles.tab}
        tabTemplate={TabTemplate}>
        <Tab icon={<FontIcon className="material-icons">important_devices</FontIcon>}>
          <Game />
        </Tab>
        <Tab icon={<FontIcon className="material-icons">code</FontIcon>}>
          <AgentEditor />
        </Tab>
        <Tab icon={<FontIcon className="material-icons">settings</FontIcon>}>
          <Settings />
        </Tab>
      </Tabs>
      <AgentError />
    </div>
  )
}

export default muiThemeable()(App)
