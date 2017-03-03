import { handleActions } from 'redux-actions'

const  reducer = handleActions({
  TICK: (state, {payload: dt }) => ({...state, time: state.time + dt }),
}, { time: Date.now() })

export default reducer