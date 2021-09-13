import React from 'react'
import logo from './logo.svg'
import './App.css'
import Dogs from './components/Dogs'
import Counter from './components/Counter'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter amountToAdd={10} />
      </header>
      <main>
        <Dogs />
      </main>
    </div>
  )
}

export default App
