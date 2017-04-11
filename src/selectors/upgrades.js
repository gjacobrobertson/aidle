import { createSelector } from 'reselect'
import { UPGRADES } from '../constants'
import Big from 'big.js'

export const cost = createSelector(
  state => state.upgrades,
  upgrades => {
    let costs = Object.keys(upgrades).map(key => {
      let level = upgrades[key]
      let base = Big(UPGRADES[key].base)
      let factor = Big(UPGRADES[key].factor)
      return { [key]: base.times(factor.pow(level)) }
    })
    return Object.assign({}, ...costs)
  }
)

export const affordable = createSelector(
  cost,
  state => state.game.cash,
  (cost, cash) => {
    let entries = Object.keys(cost).map(key => {
      return { [key]: cost[key] <= cash }
    })
    return Object.assign({}, ...entries)
  }
)
