import { combineReducers } from 'redux'
import game, {transform} from './game'
import tick from './tick'
import agent from './agent'

const reducer = combineReducers({
  game,
  agent,
  tick
})

export default reducer

export const transforms = [transform]
