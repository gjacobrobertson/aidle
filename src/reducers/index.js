import game, {transform} from './game'
import agent from './agent'
import upgrades from './upgrades'

const rootReducer = (state, action) => {
  state = state || {}
  if (action.type === 'HARD_RESET') {
    state = {}
  }
  return {
    upgrades: upgrades(state.upgrades, action),
    game: game(state.game, action, state.upgrades),
    agent: agent(state.agent, action, state.upgrades)
  }
}

export default rootReducer

export const transforms = [transform]
