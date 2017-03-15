import { combineReducers } from 'redux'
import game, {transform} from './game'
import tick from './tick'
import agent from './agent'

const reducer = combineReducers({
  game,
  agent,
  tick
})

const rootReducer = (state, action) => {
  if (action.type === 'HARD_RESET') {
    state = undefined
  }
  return reducer(state, action)
}

export default rootReducer

export const transforms = [transform]
