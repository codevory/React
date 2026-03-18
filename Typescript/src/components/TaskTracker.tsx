
interface taskTrackerProps {
    id:number;
    label:string;
    isCompleted:boolean;
    handleToggle:(id:number) => void;
}

const TaskTracker = ({handleToggle,id,label,isCompleted}:taskTrackerProps) => {
  
  return (
  <div>
  <span>{label}</span>
  <p>{`Task status : ${isCompleted ? '✔️' : '❌'}`}</p>
  <button onClick={() => handleToggle(id)}>Toggle</button>
  </div>
  )
}

export default TaskTracker


