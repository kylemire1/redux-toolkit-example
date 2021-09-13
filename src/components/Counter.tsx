import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremented, amountAdded } from '../features/counter/actions'

interface Props {
  amountToAdd?: number
}

function Counter({ amountToAdd = 5 }: Props) {
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
      <button type='button' onClick={() => addAmount(amountToAdd)}>
        Add {amountToAdd}
      </button>
    </div>
  )
}

export default Counter
