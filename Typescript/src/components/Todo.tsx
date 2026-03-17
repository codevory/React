import { useState} from 'react'

interface tasks {
    list:string[];
}

const TodoApp = () => {
    const [task,addTask] = useState<string>();
    const [items,setItems] = useState<tasks | undefined>()
 
function handleAdd(){
    const copy = {...items};
    const arr = ["hfhfh"]
    //setItems(items?.list.push(arr))
    console.log(copy)
}
 

    
    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={(e:React.EventHandler<HTMLFormElement>) => [

            ]}>
                <input value={task} onChange={(e:React.ChangeEvent<HTMLInputElement>) => addTask(e.target.value)} 
                type='text' placeholder='type your task here' />
                <button onClick={handleAdd}>add</button>
                <button onClick={() =>console.log(task,items)}>delete</button>
            </form>
        </div>
    )
}

export default TodoApp