import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeToggle } from './components/ThemeContext/ThemeToggle'
import { useTheme } from './components/ThemeContext/ThemeContext'


function App() {

  const { isDark } = useTheme();

  const [title,setTitle] = useState('')
const [details,setDetails] = useState('')


const [task , setTask] = useState([])

function submitHandler(e){
  e.preventDefault()
  if(!title){
 return alert("title field is empty")
  } else if(!details){
    return alert("details section is empty")
  }
    
    
  setTask([...task,{title,details}])
  setTitle('')
  setDetails('')
}

const deleteTask = (idx) => {
 const permit =  confirm("Are you sure to delete the task");
 if(permit){
   const copyTask = [...task]
   copyTask.splice(idx,1)
   setTask(copyTask)
 }
 else{
  return ;
 }
}

  return (
   <div className={`w-screen h-full overflow-hidden ${isDark ? "bg-zinc-800 text-white" : "bg-white text-slate-800"} `}>
    <div>
      <ThemeToggle />
    </div>
 <h1 className=' text-3xl font-bold flex justify-center items-center pt-2 px-5 text-emerald-800 w-screen '>Notes App</h1>
    <div className='md:flex w-screen gap-5 p-5'> 
   <form className='md:w-[52%]  flex flex-col items-center ' onSubmit={(e)=> {submitHandler(e)}}>
       <h2 className='text-xl  font-bold flex justify-center items-center  my-2'>Add Notes</h2>
       <input autoFocus  type="text" placeholder='Enter Note Headig' value={title} onChange={(e) => {setTitle(e.target.value)}} className=' flex items-start font-medium md:text-[20px] px-10 py-5  my-2   border-2 rounded-[7px] w-full outline-none' required></input>
       <textarea type="text" placeholder='Enter Note Details' value={details} onChange={(e) => {setDetails(e.target.value)}} className=' h-33  font-medium md:text-[20px] px-10  py-4  my-2  border-2 rounded-[7px] w-full outline-none' required />
       <button onClick={submitHandler} className='px-10 py-3 my-2 rounded-md w-1/2 outline-none cursor-pointer text-white dark:bg-blue-800 bg-blue-600 font-bold active:scale-95 '>Add</button>
    </form>


    <div id="tasks" className='md:w-[48%] w-full h-[425px] mb-10  md:mb-0 md:h-screen flex flex-col md:border-l-2 border-white overflow-auto  '>
       <h2 className='text-xl  font-bold flex justify-center items-center my-2'>Recent Notes</h2>
        {task.map((e,idx) => {
          return (<div key={idx} className='flex justify-between gap-2 px-1 md:pl-3 py-2'> 
          <div  className=' rounded-xl w-[78%] flex flex-col flex-wrap '>
            <h2 className='text-[15px] md:text-[18px] lg:text-xl font-bold  px-2 py-2 leading-snug '>{e.title}</h2> 
            <p className='text-xs  text-gray-700 font-serif md:text-shadow-2xs md:text-[15px]  px-2 bg-gray-200 rounded-[5px] py-2 '>{e.details}</p>
          </div>
          <button onClick={() => {deleteTask(idx)}} className='sm:px-2 px-1 mt-9 h-9 w-fit active:bg-red-500 bg-blue-600 font-bold rounded-sm cursor-pointer'>Delete</button>
          </div>)
        })}
    </div>
    </div>
 
 
   </div>
  )
}

export default App