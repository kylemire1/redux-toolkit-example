import { COUNTER_AMOUNTADDED, COUNTER_INCREMENTED } from './types'

export const incremented = () => {
  return {
    type: COUNTER_INCREMENTED,
  }
}

export const amountAdded = (amount: number) => {
  return {
    type: COUNTER_AMOUNTADDED,
    payload: amount,
  }
}
