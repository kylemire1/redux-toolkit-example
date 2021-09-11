import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import counter from '../features/counter/counterReducer'
import dogs from '../features/dogs/dogsReducer'

export const store = createStore(
  combineReducers({
    counter,
    dogs,
  }),
  applyMiddleware(thunk)
)
