import { useState,useContext } from 'react'
import Logo from '/logoVistle.png'
import '../../index.css'
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../Theme/ThemeSwitch';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { useTheme } from '../Theme/ThemeContext';

const Navbar = () => {
  const {isDark} = useTheme()
  const [isOpen,setisOpen] = useState(false)

  function toggleMenu(){
 setisOpen(prev => !prev)
 }

  return (
      <div className={`flex  w-full h-14 items-center md:gap-5 lg:gap-10 sm:gap-15  mr-2 
        ${isDark ? 'bg-zinc-900' : 'bg-gray-300'}`}>
        <span className='absolute md:flex items-center gap-1 hidden top-3 left-5'>
          <img src={Logo} alt='logo' className='w-10 h-10 rounded-full'></img>
          <h1 className='text-xl font-bold font-serif'>BlogVistle</h1>
        </span>
         <div className='w-1/4 h-full flex-col  px-2 rounded md:hidden flex '>
<MobileMenu isOn={isOpen} Cbfunction={toggleMenu} />
        </div>


        <span className='absolute z-1 right-5 top-3'>
      <ThemeSwitch  />
        </span>
      </div>
  )
}

export default Navbar
