import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {

  const getPreview = (text,limit=30) => {
    if(!text) return " ";
    const words = text.trim().slice(/\s+/)
    return words.length > 30 ? words.split(" ").slice(0,limit).join(" ") + " read more ":text;
  }
  
  return ( posts.map((post) => {
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
           <span className='text-[15px] font-medium md:text-xl'> {getPreview(post.content,30)}</span>
          </div>
        </div>
        </Link>
            </div>
        )
        })
  )
  
}

export default Posts
