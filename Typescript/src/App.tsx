import './App.css'
import { useState } from 'react'
import Counter from './provider/counterContext'
import TodoApp from './components/Todo';
import TaskTracker from './components/TaskTracker';

function App() {
const [value,setValue] = useState<number>(0);
const [done,setIsDone] = useState<boolean>(false)

function toggle(id:number){
if(id === id){
  setIsDone((p) => !p)
}
}


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
       <TaskTracker handleToggle={toggle} id={1} label='Hey i need to finish task Tracker component' isCompleted={done}  />
      </div>
    </>
  )
}


export default App
