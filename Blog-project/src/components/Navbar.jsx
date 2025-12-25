import { useState } from 'react'
import Logo from '/logoVistle.png'
import '../index.css'
import { NavLink } from 'react-router-dom';
import ToggleButton from './ToggleButton';
const Navbar = () => {
 
  return (
    <div className=' border w-screen border-gray-600 rounded-[5px] px-2 sm:px-6 md:px-10 py-3 flex justify-between items-center'>
      <div className='flex gap-0.5 justify-center items-center'>
      <img src={Logo} alt='logo' className='h-10 w-full object-cover rounded-full' />
      <h1 className='text-xl md:text-2xl font-bold'>BlogVistle</h1>
      </div>
      <div className='text-xl font-semibold flex justify-between gap-4 md:gap-20 sm:gap-15 lg:gap-25 mr-2'>
      <NavLink to='/' end>Home</NavLink>
      <NavLink to='/post'>Post</NavLink> 
     <ToggleButton />
      </div>
    </div>
  )
}

export default Navbar
