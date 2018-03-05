import { handleActions } from 'redux-actions'

const initialProgram = `function act(state, actions) {
  return actions.game.guess('HELLO')
}`

const initialState = {
  program: initialProgram,
  running: false,
  error: null
}
const reducer = handleActions({
  AGENT_SET_PROGRAM: (state, {payload: program}) => ({...state, program}),
  AGENT_SET_ERROR: (state, {payload: error}) => ({...state, error}),
  AGENT_START: (state) => {
    return {...state, running: state.program, error: null}
  },
  AGENT_STOP: (state, {payload: error = null}) => {
    return {...state, running: null, error}
  }
}, initialState)

export default reducer
