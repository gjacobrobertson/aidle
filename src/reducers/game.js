import { handleActions } from 'redux-actions'
import { createTransform } from 'redux-persist'
import Big from 'big.js'
import padEnd from 'pad-end'
import Secret from '../lib/secret'
import clean from '../selectors/clean'
import { SECRET_LENGTH, MAX_GUESSES } from '../constants'

const reset = (state) => {
  return {
    ...state,
    secret: Secret.generate(SECRET_LENGTH),
    guesses: []
  }
}

const initialState = reset({
  cash: Big(0),
  completions: 0
})

const sanitize = (payload) => {
  payload = payload.toString()
  payload = payload.slice(0, SECRET_LENGTH)
  payload = padEnd(payload, SECRET_LENGTH, '_')
  return payload
}

const reducer = handleActions({
  GUESS: (state, {payload}) => {
    if (!payload) {
      return state
    }

    payload = sanitize(payload)

    let value = [...payload]
    let score = state.secret.score(value)
    let correct = score.filter(x => x).length
    let nextState = {
      ...state,
      guesses: [{ value, score }, ...state.guesses],
      cash: state.cash.plus(Big(2).pow(correct))
    }
    if (correct === SECRET_LENGTH) {
      nextState.completions = nextState.completions + 1
    }
    if (correct === SECRET_LENGTH || nextState.guesses.length >= MAX_GUESSES) {
      nextState = reset(nextState)
    }
    return nextState
  }
}, initialState)

export default reducer

export const transform = createTransform(
  (state) => clean({game: state}).game,
  (state) => ({...reset(state), cash: Big(state.cash)}),
  {whitelist: ['game']}
)
