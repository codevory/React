import React from 'react'
import Tooltip from '../Resuables/Tooltip'
import { House, Telescope, TrendingUp ,SearchCheck , Ellipsis, SquarePen, Bell,UserPlus, CircleEllipsis} from 'lucide-react';
import { useTheme } from '../Theme/ThemeContext';
import userLogo from '/Userlogo.webp'
const LeftMenu = () => {
const {isDark} = useTheme()
const items = 

<div className='lg:flex-col  flex gap-1.5 h-full mt-2'>
<Tooltip content={`Home`}>
    <div aria-label='Home' className={`cursor-pointer inline-flex  gap-2 font-medium active:font-bold active:scale-102 text-xl rounded-full  px-6 py-3  
      ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<House size={28} />} <span>Home</span></div>
</Tooltip>

<Tooltip content={`Explore`}>
    <div aria-label='Explore' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3 
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<Telescope size={28} />} <span>Explore</span></div>
</Tooltip>

<Tooltip content={`Notfications`}>
    <div aria-label='Notifications' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3  
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<Bell size={28} />} <span>Notifications</span></div>
</Tooltip>

<Tooltip content={`Trending`}>
    <div aria-label='Trending' className={`cursor-pointer inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3 
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '}  `}>{<TrendingUp size={28} />} <span>Trending</span></div>
</Tooltip>

<Tooltip content={`Coming Soon`}>
    <div aria-label='Follow' className={`cursor-pointer  inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3 
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '}`}>{<UserPlus size={28} />} <span>Follow</span></div>
</Tooltip>

<Tooltip content={`Find More`}>
    <div aria-label='Find more' className={` cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3  
      ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<CircleEllipsis size={28} />} <span>More</span></div>
</Tooltip>

<Tooltip content={`Create Post`}>
    <div aria-label='Create post' className={`mt-2 cursor-pointer flex gap-2 font-bold active:scale-103 text-xl rounded-4xl justify-center items-center px-6 py-3
       ${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>{<SquarePen size={28} />} Post <span></span></div>
</Tooltip>

<Tooltip content={`User info`}>
  <div className={`inline-flex items-center gap-x-2 cursor-pointer px-6 py-2 mt-10 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-300'}`}>
       <img src={userLogo} alt='user Profile' className='size-12 rounded-full'></img>

<div className='flex flex-col '>
       <span className=' font-semibold   lg:font-bold text-[15px] sm:text-[16px] lg:text-lg'>Shahijahan Pedhar</span>
       <span className='font-sans text-[14px] md:text-[16px] text-gray-600'>@shahijahanQ</span>
</div>

      <span className='ml-2 lg:ml-3'>
         <Ellipsis size={20} />
      </span>
  </div>
</Tooltip>
</div>






  return (
   <div>
    {items}
   </div>
  )
}

export default LeftMenu
