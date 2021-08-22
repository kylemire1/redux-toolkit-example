import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counterSlice'
import Dogs from './components/Dogs'

function App() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

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
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
      <main>
        <Dogs />
      </main>
    </div>
  )
}

export default App
