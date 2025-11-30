import {useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(){

  const [userData , setUserData] = useState([])
  const [copyData,setCopyData] = useState([])
  const [index,setIndex] = useState(1)

  async function getData(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
   setUserData(response.data)
   setCopyData([...copyData,userData])
  }

  useEffect(function(){
getData()
  },[index])
    let printUserData = <h3 className='text-shadow-amber-300 text-xs font-semibold text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate--y-1/2 '>LOADING...</h3>
    if(userData.length > 0){
      printUserData = userData.map(function(elm,idx){
 return <div key={idx}>
<Card elm={elm} />
 </div> 
      })
    }

  return <div className='bg-black text-white h-screen p-5 overflow-auto flex flex-col '>
  <div className='flex flex-wrap gap-5 p-2 justify-center items-start h-[80%]'>
{printUserData}
  </div>

<div className='flex justify-center items-center px-3 py-6 gap-3 mt-12 absolute top-[87%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
  <button style={{opacity:index==1 ? 0.5:1}}  onClick={() => {
    if(index > 1){
    setIndex(index - 1)
    setUserData([])
    }
  }} className='bg-amber-600 text-black px-6 py-2 font-medium rounded cursor-pointer active:bg-amber-200'>Prev</button>
  <h3 className='text-lg font-semibold bg-black text-white px-2 pr-0 rounded-[5px]'>Page : <span className='text-xl font-bold bg-red-800 text-white px-2 rounded-[5px]'>{index}</span></h3>
  <button onClick={() => {
    setIndex(index + 1)
    setUserData([])
    }} className='bg-amber-600 text-black px-6 py-2 font-medium rounded cursor-pointer active:bg-amber-200'>Next</button>
</div>
  </div>
}

export default App
