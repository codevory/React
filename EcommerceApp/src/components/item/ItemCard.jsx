import React from 'react'
import { Star } from 'lucide-react';
import { onSearch } from '../../api/items';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/searchSlice';
const ItemCard = ({data}) => {


  return data.map((item) => {
      return (
      <div className='w-35 h-45  flex flex-col gap-1 rounded-xl hover:scale-95 bg-pink-400 '>
        <img className='w-full h-full object-cover object-center' src={item.image} alt={`${item.title} image`}></img>
        <div className='flex gap-1'>
          <h2 className='text-[12px]'>{item.title}</h2>
          <span className='flex gap-1 items-center text-[14px]'>{item.rating}
          <span>{<Star size={13} stroke='black' fill='black' />}</span>
          </span>
        </div>
        <div className='flex justify-between px-1 text-[13px]'>
          <span>{item.price}</span>
          <span>{item.category}</span>
        </div>
      </div>
      )
    })
  }


export default ItemCard
