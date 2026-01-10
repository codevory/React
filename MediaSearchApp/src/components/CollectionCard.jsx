import React from 'react'
import { removeCollection, removedToast } from '../redux/features/collectionSlice'
import { useDispatch } from 'react-redux'

const CollectionCard = ({item}) => {
    const dispatch = useDispatch()
    const remove = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removedToast())
    }
  return (<>
    {item.map((item,idx) =>{
        return (
            <div key={idx} className='w-[18vw] h-80  rounded-t-2xl relative overflow-hidden hover:scale-95'>
             <a target='_blank' href={item.url} alt='src-link' className='cursor-pointer '>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></img> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></img> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' src={item.src} alt={item.title}></video> : ''}
             </a>
        <div id='bottom' className='flex justify-between gap-3  items-center absolute bottom-1 w-full  text-white'>
            <h1 className=' font-semibold'>{item.title}</h1>
            <button onClick={() => {remove(item)}} className='cursor-pointer active:scale-90 active:bg-(--colorSecondary) w-20 h-12 rounded-xl p-2 bg-(--colorPrimary) font-bold'>Remove</button>
        </div>
            </div>
        )
    })}
  </>)
}

export default CollectionCard
