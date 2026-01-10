import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos','videos','gif']
   const dispatch =  useDispatch()
   const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='flex gap-5 px-5 py-3 ml-8'>
      {tabs.map((elm,idx) => {
        return (
        <button key={idx} onClick={() => dispatch(setActiveTabs(elm))} 
        className={` ${activeTab == elm ? 'bg-(--colorQuad) scale-110' : 'bg-(--colorSecondary)'}  w-40 h-12 p-5 rounded font-semibold  flex justify-center items-center cursor-pointer active:scale-95`}>{elm}</button>
         )
      })}
    </div>
  )
}

export default Tabs
