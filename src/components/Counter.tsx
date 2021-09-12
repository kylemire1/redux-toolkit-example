import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { incremented, amountAdded } from '../features/counter/counterSlice'

function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  const increment = () => {
    dispatch(incremented())
  }

  const addAmount = (value = 5) => {
    dispatch(amountAdded(value))
  }

  return (
    <div>
      <button type='button' onClick={increment}>
        count is: {count}
      </button>
      <br />
      <button type='button' onClick={() => addAmount(5)}>
        Add 5
      </button>
    </div>
  )
}

export default Counter
