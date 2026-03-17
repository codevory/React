import './App.css'
import { useState } from 'react'
import Counter from './provider/counterContext'
import TodoApp from './components/Todo';

function App() {
const [value,setValue] = useState<number>(0);
function increment(){
setValue((p) => p + 1);
}
function decrement(){
  setValue((p) => p - 1)
}
  return (
    <>
      <div>
       <Counter value={value} increment={increment} decrement={decrement} />
       <TodoApp />
      </div>
    </>
  )
}

export default App
