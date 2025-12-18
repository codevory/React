import { useState } from 'react'
import { Link } from 'react-router-dom'
import Filterpost from '../components/Filterpost'
import Search from '../components/Search'
import Posts from '../components/Posts'

 const Blog = () => {

  return (
    <div className='flex flex-col px-6 py-2'>
        <div className='flex justify-between mb-3'>
          <Search />
           <Filterpost />
        </div>
        <div className='flex flex-col gap-3.5'>
      <Posts />
        </div>
    </div>
  )
 }

export default Blog


