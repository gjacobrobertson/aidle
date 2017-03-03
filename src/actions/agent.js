import { createAction } from 'redux-actions'

export const setProgram = createAction('AGENT_SET_PROGRAM')
export const setError = createAction('AGENT_SET_ERROR')
export const start = createAction('AGENT_START')
export const stop = createAction('AGENT_STOP')
