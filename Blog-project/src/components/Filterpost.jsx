import React,{useState} from 'react'
import {Link } from 'react-router-dom'

const Filterpost = () => {

    const [sortedOrder,setSortedOrder] = useState("newest")
    const data = JSON.parse(localStorage.getItem("postData"))

    const sortedPost = data.slice().sort((a,b) => {
        if(sortedOrder === "newest"){
            return b.createdAt - a.createdAt;
        }
        else{
            return a.createdAt - b.createdAt;
        }
    })

  return (
       <div className=''>
      <select className='w-30 h-8 px-2 rounded bg-black text-white' value={sortedOrder} onChange={(e) => {setSortedOrder(e.target.value)}}>
        <option vaue="newest">newest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  )
}

export default Filterpost