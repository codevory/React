import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {

  const getPreview = (text,limit=30) => {
    if(!text) return " No post found!";
    const words = text.trim().slice(/\s+/)
    return words.length > 30 ? words.split(" ").slice(0,limit).join(" ") :text;
  }

if(posts.length > 0){

  return (
    posts.map((post) => {
        return (
            <div key={post.id} >
     <Link to={`/article/${post.slug}`}>
       <div className=' flex flex-col gap-1 h-70 min-h-40 bg-transparent border-2 rounded-[9px] px-2 py-1 shadow-md transition '>
          <div className='flex flex-col gap-1'>
        <h1 className='text-[18px] font-semibold md:text-[19px] '> {post.title}</h1>
        <div className='flex items-center gap-1'>
         <span className='text-xs font-semibold md:text-[16px] rounded-[5px] px-2 py-1 text-blue-700 bg-blue-100'>{post.category}</span>
           <div className='flex justify-start items-center gap-2 font-mono text-[14px] md:text-[14px]'>
            <span>{post.date} {"•"}</span>
            <span>{post.time}</span>
          </div>
        </div>
          </div>
          <div className=''>
           <p className='text-[15px] font-sans md:text-[17px] max-w-3xl'><p>{getPreview(post.content,30)} {post.content.split(/\s+/).length > 30 && (
            <span className='text-blue-800 font-bold body dark:text-blue-400'>Show more</span> )}  
             </p></p>
          </div>
        </div>
        </Link>
            </div>
        )
        })
  )
}
else if(posts.length === 0){
  return (
    <div className='flex justify-center items-center text-center bg-red-400 text-white'>
      <p className='font-semibold'>No Post Found </p>
    </div>
  )
}
  
}

export default Posts
