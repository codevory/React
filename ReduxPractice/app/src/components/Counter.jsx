import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setIncrement,setDecrement,incrementByNum,decrementByNum } from '../App/features/counterSlice';

const Counter = () => {
    const [text,setText] = useState(0)
   const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(setIncrement())
    }
     const decrease = () => {
        dispatch(setDecrement())
    }
    const inputInc = (e) => {
        dispatch(incrementByNum(e))
    }
    const inputDec = (e) => {
        dispatch(decrementByNum(e))
    }
  return (
    <div>
      <h3>Count : </h3>
      <h2>{count}</h2>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
      <input onChange={(e) => setText(e.target.value)} onAuxClick={(e) => {inputDec(Number(text))}} onDoubleClick={(e) => {inputInc(Number(text))}} value={text} />
    </div>
  )
}

export default Counter
