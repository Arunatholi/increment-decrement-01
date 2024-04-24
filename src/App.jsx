import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count+1)
  }
  const decrement = ()=>{
    setCount(count-1)
  }

  return (
    <div className='count'>
      <h1 className='count-text'>Count:{count}</h1>
      <div className='count-button'>
      <button className='button' onClick={increment}>increase</button>
      <button className='button' onClick={decrement}>Decrease</button>
      </div>
    </div>
  )
}

export default App