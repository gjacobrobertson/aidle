import clone from 'clone'

export default (state) => {
  let cleanState = clone(state)
  delete cleanState.game.secret
  return cleanState
}
