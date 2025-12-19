import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const data = JSON.parse(localStorage.getItem("postData"))
    let order = JSON.parse(localStorage.getItem("sortedOrder"))


          let sortedPost = data.slice().sort((a,b) =>{
        if(order === "newest"){
          return b.createdAt - a.createdAt;
        }
        else{
          return a.createdAt - b.createdAt;
        }
      })

  
  return ( sortedPost.map((post) => {
        return (
            <div key={post.id}>
     <Link to={`/article/${post.id}`}>
       <div className=' flex flex-col w-full min-h-40 bg-transparent border-2 rounded-[7px] px-2 py-1 text-black'>
          <div className='flex justify-between'>
        <span className='text-[18px] font-semibold md:text-xl md:font-bold'> {post.title}</span>
         <span className='text-[18px] font-semibold md:text-xl md:font-bold bg-gray-200 rounded-lg p-1'>{post.category}</span>
          </div>
          <div className='flex justify-between'>
            <span>{post.date}</span>
            <span>{post.time}</span>
          </div>
          <div className=' text-black'>
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
