import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './styles'
import theme from './styles/theme'

import reducer, {transforms} from './reducers'
import { act } from './actions/agent'

import App from './components/App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
    autoRehydrate())
  )

setInterval(store.dispatch, 100, act)
persistStore(store, {transforms})

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
