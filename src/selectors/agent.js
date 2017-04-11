import { createSelector } from 'reselect'
import * as actions from '../actions'
import clean from './clean'
import cleanEval from './cleanEval'

const program = state => state.agent.program
const running = state => state.agent.running

export const act = createSelector(
  program,
  cleanEval
)

export const getAct = createSelector(
  running, act,
  (running, act) => {
    return running && (state => act(clean(state), actions))
  }
)
