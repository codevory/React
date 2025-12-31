import React from 'react'
import { House, Telescope, TrendingUp ,SearchCheck , SquarePen, Bell,UserPlus, CircleEllipsis} from 'lucide-react';
import { useTheme } from '../Theme/ThemeContext';
const LeftMenu = () => {
const {isDark} = useTheme()
const items = <div className='flex lg:flex-col gap-2 h-full'>
    <div className='flex gap-2 font-bold text-xl  px-2 py-4'>{<House size={28} />} <span>Home</span></div>
    <div className='flex gap-2 font-bold text-xl  px-2 py-4 '>{<Telescope size={28} />} <span>Explore</span></div>
    <div className='flex gap-2 font-bold text-xl  px-2 py-4 '>{<Bell size={28} />} <span>Notifications</span></div>
    <div className='flex gap-2 font-bold text-xl  px-2 py-4 '>{<TrendingUp size={28} />} <span>Trending</span></div>
    <div className='flex gap-2 font-bold text-xl  px-2 py-4 '>{<UserPlus size={28} />} <span>Follow</span></div>
    <div className='flex gap-2 font-bold text-xl  px-2 py-4 '>{<CircleEllipsis size={28} />} <span>More</span></div>
    <div className={`flex gap-2 font-bold text-xl rounded-4xl justify-center items-center px-2 py-4 ${isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>{<SquarePen size={28} />} Post <span></span></div>
</div>






  return (
   <div>
    {items}
   </div>
  )
}

export default LeftMenu
