import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {

  const getPreview = (text,limit=30) => {
    if(!text) return " No post found!";
    const words = text.trim().slice(/\s+/)
    return words.length > 30 ? words.split(" ").slice(0,limit).join(" ") :text;
  }
  
  return ( posts.map((post) => {
        return (
            <div key={post.id}>
     <Link to={`/article/${post.id}`}>
       <div className=' flex flex-col w-full min-h-40 bg-transparent border-2 rounded-[7px] px-2 py-1 text-black'>
          <div className='flex justify-between'>
        <span className='text-[18px] font-semibold md:text-[19px]'> {post.title}</span>
         <span className='text-[14px] font-semibold md:text-[17px]  bg-gray-100 rounded-lg md:p-1'>{post.category}</span>
          </div>
          <div className='flex justify-between font-mono text-[14px] md:text-[14px]'>
            <span>{post.date}</span>
            <span>{post.time}</span>
          </div>
          <div className=' text-black'>
           <span className='text-[15px] font-sans md:text-[17px]'><p>{getPreview(post.content,30)} {post.content.split(/\s+/).length > 30 && (
            <span className='text-blue-800 font-bold'>Show more</span> )}  
             </p></span>
          </div>
        </div>
        </Link>
            </div>
        )
        })
  )
  
}

export default Posts
