import React,{ useState } from 'react'
import TaskTracker from './TaskTracker';
import '../App.css'

interface TaskType {
    id:number;
    label:string;
    isCompleted:boolean;
}


const TaskTrackerParent = () => {
    const [tasks,setTasks] = useState<TaskType[]>([])
    const [text,setText] = useState<string>('')


    function handleToggle(id:number):void{
        setTasks((prev) => prev.map((t) => (t.id === id ? {...t,isCompleted : !t.isCompleted} : t)))
    }

    function handleSubmit(e:React.SubmitEvent){
        e.preventDefault()
        if(!text.trim()) return;
        
        const newTask:TaskType = {
         id:Date.now(),
         label:text,
         isCompleted:false,
        }

        //append
        setTasks((prev) => [...prev,newTask])
        setText('')
    }

    function handleDeleteTask(id:number):void{
      const newtask =  tasks.filter((t) => t.id != id)
      setTasks(newtask)
    }

    function handleClearTasks():void{
        if(tasks.length === 0) return;        
        setTasks([])
    }

        return (
            <div className='taskTrackerdiv'>
            <form className='taskForm' onSubmit={handleSubmit}>
            <label> Enter task
            <input type='text' placeholder='Type here..' value={text} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>):void => setText(e.target.value)} />
            </label>
            <button type='submit'>Add task</button>
           
            </form>
                <button onClick={handleClearTasks}>clear All</button>
            <div>
          {tasks.map((task) => <TaskTracker key={task.id} handleToggle={() => handleToggle(task.id)} 
          isCompleted={task.isCompleted} id={task.id} label={task.label} handleDelete={() => handleDeleteTask(task.id)} />
          )}
            </div>
            </div>
        )
}
export default TaskTrackerParent
