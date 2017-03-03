import { handleActions } from 'redux-actions'
import InvalidProgramError from '../lib/InvalidProgramError'
import cleanEval from '../lib/cleanEval'

const initialProgram = `function act(state, actions) {
  return actions.game.guess('HELLO')
}`

const initialState = {
  program: initialProgram,
  act: null,
  error: null,
  isRunning: function() {
    return this.act !== null
  }
}
const  reducer = handleActions({
  AGENT_SET_PROGRAM: (state, {payload: program}) => ({...state, program}),
  AGENT_SET_ERROR: (state, {payload: error}) => ({...state, error}),
  AGENT_START: (state) => {
    try {
      let act = cleanEval(state.program)
      if (!act instanceof Function) {
        throw new InvalidProgramError('Program must define act function')
      }
      return {...state, act, error: null}
    } catch (error) {
      return {...state, error, act: null}
    }
  },
  AGENT_STOP: (state, {payload: error=null}) => {
    return {...state, error, act: null}
  }
}, initialState);

export default reducer;