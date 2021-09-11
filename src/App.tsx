import React from 'react'
import logo from './logo.svg'
import './App.css'
import { incremented, amountAdded } from './features/counter/actions'
import Dogs from './components/Dogs'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state: any) => state.value)

  const increment = () => {
    dispatch(incremented())
  }

  const addAmount = (value = 5) => {
    dispatch(amountAdded(value))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={increment}>
            count is: {count}
          </button>
          <br />
          <button type='button' onClick={() => addAmount(5)}>
            Add 5
          </button>
        </p>
      </header>
      <main>
        <Dogs />
      </main>
    </div>
  )
}

export default App
