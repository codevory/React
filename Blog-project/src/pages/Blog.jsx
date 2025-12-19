import { useState } from 'react'
import { Link } from 'react-router-dom'
import Filterpost from '../components/Filterpost'
import Search from '../components/Search'
import Posts from '../components/Posts'

 const Blog = () => {

  return (
    <div className='flex flex-col px-6 py-2 bg-white '>
        <div className='flex justify-between items-center py-1 w-full'>

<span className='block ml-2 w-[60%]'>

             <Filterpost />
</span>
<span className='block mr-1 w-[40%] '>

             <Search  />
</span>
          

        </div>
        <div className='flex flex-col gap-3.5'>
      <Posts />
        </div>
    </div>
  )
 }

export default Blog


