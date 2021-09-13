import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { incremented, amountAdded } from '../features/counter/counterSlice'

interface Props {
  amountToAdd?: number
}

function Counter({ amountToAdd = 5 }: Props) {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  const increment = () => {
    dispatch(incremented())
  }

  const addAmount = (value: number) => {
    dispatch(amountAdded(value))
  }

  return (
    <div>
      <button type='button' onClick={increment}>
        count is: {count}
      </button>
      <br />
      <button type='button' onClick={() => addAmount(amountToAdd)}>
        Add {amountToAdd}
      </button>
    </div>
  )
}

export default Counter
