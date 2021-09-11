import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremented, amountAdded } from '../features/counter/actions'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter.value)

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
