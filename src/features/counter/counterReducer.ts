import { COUNTER_AMOUNT_ADDED, COUNTER_INCREMENTED } from './types'
let initialState = { value: 0 }

const counterReducer = (state = initialState, action: any) => {
  let newState = { ...state }

  if (action.type === COUNTER_INCREMENTED) {
    newState.value = newState.value + 1
  } else if (action.type === COUNTER_AMOUNT_ADDED) {
    newState.value += action.payload ?? 0
  }

  return newState
}

export default counterReducer
