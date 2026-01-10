import React from 'react'
import {useDispatch} from 'react-redux'
import { addedToast, addToCollection } from '../redux/features/collectionSlice';
const ResultCard = ({item,id}) => {

  const dispatch = useDispatch();
  const saveCollection = () =>{
    dispatch(addToCollection(item))
    dispatch(addedToast())
    console.log("collection call from resultCard \n")
  }

  return (
    <div className='w-[18vw] h-80  rounded-t-2xl relative overflow-hidden hover:scale-95'>
     <a target='_blank' href={item.url} alt='src-link' className='cursor-pointer '>
        {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></img> : ''}
        {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></img> : ''}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></video> : ''}
     </a>
<div id='bottom' className='flex justify-between gap-3  items-center absolute bottom-1 w-full  text-white'>
    <h1 className=' font-semibold'>{item.title}</h1>
    <button onClick={() => {saveCollection()}} className='cursor-pointer active:scale-90 active:bg-(--colorSecondary) w-20 h-12 rounded-xl p-2 bg-(--colorPrimary) font-bold'>Save</button>
</div>
    </div>
  )
}

export default ResultCard
