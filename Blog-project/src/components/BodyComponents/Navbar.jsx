import { useState,useContext } from 'react'
import Logo from '/logoVistle.png'
import '../../index.css'
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../Theme/ThemeSwitch';
import { useTheme } from '../Theme/ThemeContext';

const Navbar = () => {
const {isDark} = useTheme()
  return (
    <div className=' border w-full border-gray-600 rounded-[5px] mr-2 px-2 sm:px-5 md:px-10 py-3 flex justify-between items-center'>
      <div className='flex gap-0.5 justify-center items-center'>
      <img src={Logo} alt='logo' className='h-10 w-full object-cover rounded-full' />
      <h1 className='text-xl md:text-2xl font-bold'>BlogVistle</h1>
      </div>
      <div className='text-xl font-semibold flex justify-between items-center gap-2 md:gap-5 lg:gap-10 sm:gap-15  mr-2'>
      <ThemeSwitch  />
      </div>
    </div>
  )
}

export default Navbar
