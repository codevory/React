import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos','videos','gif']
   const dispatch =  useDispatch()
   const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='flex gap-5 px-5 py-3'>
      {tabs.map((elm,idx) => {
        return (
        <button key={idx} onClick={() => dispatch(setActiveTabs(elm))} 
        className={` ${activeTab == elm ? 'bg-red-500 scale-105' : 'bg-zinc-400'}  w-40 h-14 p-5 rounded font-semibold m-2 bg-emerald-500 flex justify-center items-center cursor-pointer active:scale-95`}>{elm}</button>
         )
      })}
    </div>
  )
}

export default Tabs
