import { createAction } from 'redux-actions'
import { isFSA } from 'flux-standard-action'
import Promise from 'bluebird'
import InvalidProgramError from '../lib/InvalidProgramError'
import cleanState from '../lib/cleanState'
import * as actions from './index'

const tick = createAction('TICK')

const handleUserAction = (dispatch, action) => {
  if (isFSA(action)) {
    dispatch(action)
  } else {
    throw new InvalidProgramError('Agent did not return an action')
  }
}

export default (dispatch, getState) => {
  let state = getState()
  let { agent } = state
  if (agent.isRunning()) {
    try {
      let action = agent.act(cleanState(state), actions)
      handleUserAction(dispatch, action)
    } catch(err) {
      dispatch(actions.agent.stop(err))
    } finally {
      let dt = Date.now() - state.tick.time
      return dispatch(tick(dt))
    }
  }

}