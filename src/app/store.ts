import { createStore } from 'redux'
import counterReducer from '../features/counter/counterReducer'

export const store = createStore(counterReducer)
