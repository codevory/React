import { useState,useMemo } from 'react'
import { Link } from 'react-router-dom'
import Sortpost from '../components/Sortpost'
import Search from '../components/Search'
import Posts from '../components/Posts'

 const Blog = () => {

  const [searchQuery,setsearchQuery] = useState('')
  const [sortedOrder,setSortedOrder] = useState("newest")
  const posts = JSON.parse(localStorage.getItem("postData")) || []

  const finalPost = useMemo(() => {
    const filteredPost = posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filteredPost.sort((a,b) =>{
      if(sortedOrder === "newest") return b.createdAt - a.createdAt;
      return a.createdAt - b.createdAt;
    })

    return filteredPost;
  },[posts,searchQuery,sortedOrder])

  return (
    <div className='flex flex-col px-6 py-2 bg-white '>
        <div className='flex justify-between items-center py-1 w-full'>

<span className='block ml-2 w-[60%]'>

             <Sortpost onSort={setSortedOrder} />
</span>
<span className='block mr-1 w-[40%] '>

             <Search onSearch={setsearchQuery} />
</span>
          

        </div>
        <div className='flex flex-col gap-3.5'>
      <Posts posts={finalPost} />
        </div>
    </div>
  )
 }

export default Blog


