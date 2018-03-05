import { createSelector } from 'reselect'
import * as actions from '../actions'
import clean from './clean'
import cleanEval from './cleanEval'

const running = state => state.agent.running

export const getAct = createSelector(
  running,
  running => {
    if (!running) {
      return
    }
    let act = cleanEval(running)
    return state => {
      return act(clean(state), actions)
    }
  }
)
