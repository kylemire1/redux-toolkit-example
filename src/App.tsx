import React from 'react'
import './App.css'
import Counter from './components/Counter'
import Dogs from './components/Dogs'

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
