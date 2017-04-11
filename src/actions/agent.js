import { createAction } from 'redux-actions'
import { isFSA } from 'flux-standard-action'
import InvalidProgramError from '../lib/InvalidProgramError'
import { getAct } from '../selectors/agent'

const handleUserAction = (dispatch, action) => {
  if (isFSA(action)) {
    dispatch(action)
  } else {
    throw new InvalidProgramError('Agent did not return an action')
  }
}

export const setProgram = createAction('AGENT_SET_PROGRAM')
export const setError = createAction('AGENT_SET_ERROR')
export const start = createAction('AGENT_START')
export const stop = createAction('AGENT_STOP')

export const act = (dispatch, getState) => {
  let state = getState()
  try {
    let act = getAct(state)
    if (act) {
      handleUserAction(dispatch, act(state))
    }
  } catch (err) {
    dispatch(stop(err))
  }
}
