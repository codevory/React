import React,{ useState } from 'react'
import TaskTracker from './TaskTracker';

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

    
    function handleSubmit(e:React.FormEvent){
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


        return (
            <div>
            <form onSubmit={handleSubmit}>
            <label> Enter task
            <input type='text' placeholder='Type here..' value={text} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>):void => setText(e.target.value)} />
            </label>
            <button type='submit'>Add task</button>
           
            </form>
            <div>
          {tasks.map((task) => <TaskTracker key={task.id} handleToggle={() => handleToggle(task.id)} 
          isCompleted={task.isCompleted} id={task.id} label={task.label}  />
          )}
            </div>
            </div>
        )
}
export default TaskTrackerParent
