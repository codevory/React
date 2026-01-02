import Tooltip from '../Resuables/Tooltip'
import { House, Telescope, TrendingUp ,SearchCheck , Ellipsis, SquarePen, Bell,UserPlus, CircleEllipsis} from 'lucide-react';
import { useTheme } from '../Theme/ThemeContext';
import userLogo from '/Userlogo.webp'
import { Menu } from 'lucide-react';

const MobileMenu = ({isOn,Cbfunction}) => {
  const {isDark} = useTheme()
  const check = isDark ? 'bg-zinc-900' : 'bg-zinc-400'
const items = 

<div id='mobileMenu' className={`flex flex-col   gap-5 absolute top-0 left-0 md:hidden transition-transform ease-in duration-300 ${isOn ? check  : ''}  `}>
          <span onClick={Cbfunction} className={`relative inline-flex  top-5 left-5 cursor-pointer actve:scale-97 md:hidden`}><Menu size={25} /></span>
<div id='menuContent' className={`flex-col w-full h-screen flex gap-0.5 mt-4 transition-transform ease-in duration-300 ${isDark ? 'bg-zinc-900' : 'bg-zinc-400'}  ${isOn ? 'traslate-x-10 block bg-black ' : '-translate-x-50 hidden'}`}>
    
    <div aria-label='Home' className={`cursor-pointer inline-flex  gap-2 font-medium active:font-bold active:scale-95 text-[15px] rounded-full  px-3 py-1.5  
      ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<House size={20} />} <span>Home</span></div>

    <div aria-label='Explore' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-95 text-[15px] px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<Telescope size={20} />} <span>Explore</span></div>

    <div aria-label='Notifications' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<Bell size={20} />} <span>Notifications</span></div>

    <div aria-label='Trending' className={`cursor-pointer inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '}  `}>{<TrendingUp size={20} />} <span>Trending</span></div>

    <div aria-label='Follow' className={`cursor-pointer  inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '}`}>{<UserPlus size={20} />} <span>Follow</span></div>

    <div aria-label='Find more' className={` cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5   
      ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<CircleEllipsis size={20} />} <span>More</span></div>

    <div aria-label='Create post' className={`mt-2 cursor-pointer w-35 flex gap-2 font-bold active:scale-95 text-[15px] rounded-4xl justify-center items-center px-2 py-1
       ${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>{<SquarePen size={20} />} Post </div>

<Tooltip content={`User info`}>
  <div className={`inline-flex items-center gap-x-1 cursor-pointer px-2 py-1   mt-5 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-300'}`}>
       <img src={userLogo} alt='user Profile' className='size-6 rounded-full'></img>

<div className='flex flex-col '>
       <span className=' font-medium  text-[10px] sm:text-[12px] '>Shahijahan Pedhar</span>
       <span className='font-sans text-[8px] md:text-[10px] text-gray-600'>@shahijahanQ</span>
</div>

      <span className='ml-0.5'>
         <Ellipsis size={20} />
      </span>
  </div>
</Tooltip>
</div>
</div>




  return (
   <div>
    {items}
   </div>
  )
}

export default MobileMenu