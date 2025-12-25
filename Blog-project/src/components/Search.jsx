import React,{useState} from 'react'
import searchicon from '../assets/searchicon.png'

const Search = ({onSearch}) => {
  return (
    <div className='w-full h-12 py-1 flex lg:justify-center items-center gap-2 md:gap-0 rounded-[7px] relative border-2'>
      <img className='absolute left-1 top-2.5 md:top-1.5 size-6 md:size-8 rounded' src={searchicon} style={{color:'red'}} typeof='png/img' alt='search-icon' />
      <input onChange={(e) => onSearch(e.target.value)} type='text' name='search' placeholder='Type to search..' className='text-[14px] md:text-xl absolute right-1 md:left-11 outline-0 top-0 w-[80%] h-full px-1 lg:px-0 rounded '/>
    </div>
  )
}

export default Search
