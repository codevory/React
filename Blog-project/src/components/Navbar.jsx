import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-purple-800 text-white px-2 sm:px-6 md:px-10 py-3 flex justify-between'>
      <h1 className='text-xl md:text-2xl font-bold'>BlogVistle</h1>
      <div className='text-xl font-semibold flex justify-between gap-4 md:gap-20 sm:gap-15 lg:gap-25'>
      <NavLink to='/' end>Home</NavLink>
      <NavLink to='/post'>Post</NavLink> 
      <NavLink to='/blog'>Blogs</NavLink>
      </div>
    </div>
  )
}

export default Navbar
