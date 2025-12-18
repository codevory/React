import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const data = JSON.parse(localStorage.getItem("postData"))
  return (
    data.map((post) => {
        return (
            <div key={post.id}>
     <Link to={`/article/${post.id}`}>
       <div className=' flex flex-col w-full min-h-40 bg-slate-500 border-2 rounded-[7px] px-2 py-1 text-white'>
          <div className='flex justify-between'>
        <span className='text-[18px] font-semibold md:text-xl md:font-bold'> {post.title}</span>
         <span className='text-[18px] font-semibold md:text-xl md:font-bold bg-gray-600 rounded-lg p-1'>{post.category}</span>
          </div>
          <div className='flex justify-between'>
            <span>{post.date}</span>
            <span>{post.time}</span>
          </div>
          <div className=' text-white'>
           <span className='text-[15px] font-medium md:text-xl'> {post.content}</span>
          </div>
        </div>
        </Link>
            </div>
        )
    })
  )
}

export default Posts
