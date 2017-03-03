import { handleActions } from 'redux-actions'
import { createTransform } from 'redux-persist'
import Big from 'big.js'
import padEnd from 'pad-end'
import Secret from '../lib/secret'
import cleanState from '../lib/cleanState'

const secretLength = 50
const maxGuesses = 100

const reset = (state) => {
  return {
    ...state,
    secret: Secret.generate(secretLength),
    guesses: []
  }
}

const initialState = reset({cash: Big(0), secretLength, maxGuesses})

const sanitize = (payload) => {
  payload = payload.toString()
  payload = payload.slice(0, secretLength)
  payload = padEnd(payload, secretLength, '_')
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
    if (correct === secretLength || nextState.guesses.length >= maxGuesses) {
      nextState = reset(nextState)
    }
    return nextState
  }
}, initialState)

export default reducer

export const transform = createTransform(
  (state) => cleanState({game: state}).game,
  (state) => ({...reset(state), cash: Big(state.cash)}),
  {whitelist: ['game']}
)
