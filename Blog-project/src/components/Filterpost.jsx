import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'

const Filterpost = () => {

     const [sortedOrder,setSortedOrder] = useState("newest")
    const data = JSON.parse(localStorage.getItem("postData"))

    useEffect(() => {
          localStorage.setItem("sortedOrder",JSON.stringify(sortedOrder))
    },[sortedOrder])


  return (
       <div className=''>
      <select className='w-40 h-10 px-2 py-1 rounded bg-purple-800 text-white' value={sortedOrder} onChange={(e) => {
        setSortedOrder(e.target.value)  
        }}>
        <option vaue="newest">newest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  )
}
export default Filterpost