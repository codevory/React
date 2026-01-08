import { useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, increaseByAmount } from './redux/features/counterSlice'

function App() {
 const dispatch = useDispatch()
 const count = useSelector((state) => state.counter.value)
const [num, setNum] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() =>{dispatch(increment())}}>Increment</button>
      <button onClick={() =>{dispatch(decrement())} }>Decrement</button>
      <input type='number' value={num} onChange={(e) => setNum(e.target.value)}></input>
      <button onClick={() => {dispatch(increaseByAmount(Number(num)))}}>Increase by {num}</button>
    </div>
  )
}

export default App
