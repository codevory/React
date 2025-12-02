import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-purple-950'>
      <h2 className='text-2xl font-extrabold'>PortalToBitcoin</h2>
      <div className='flex justify-between items-center gap-20 text-xl font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
