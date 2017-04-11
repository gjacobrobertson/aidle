import { handleActions } from 'redux-actions'
import clone from 'clone'
import { UPGRADES } from '../constants'
import { affordable, cost } from '../selectors/upgrades'

export default handleActions({
  PURCHASE: (state, { payload: key }) => {
    if (affordable(state)[key]) {
      return state
    }
    let newState = clone(state)
    newState.upgrades[key] = state.upgrades[key] + 1
    newState.cash = state.cash - cost[key]
    return newState
  }
}, {
  upgrades: Object.assign({}, ...Object.keys(UPGRADES).map(k => ({[k]: 0})))
})
