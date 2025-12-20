import React,{useState} from 'react'
import searchicon from '../assets/searchicon.png'

const Search = ({onSearch}) => {
  return (
    <div className='w-full h-12 py-1 flex gap-2 md:gap-0 border-2 rounded-[7px] relative text-black'>
      <img className='absolute left-1 top-3 md:top-2 size-7 md:size-9 rounded' src={searchicon} style={{color:'red'}} typeof='png/img' alt='search-icon' />
      <input onChange={(e) => onSearch(e.target.value)} type='text' name='search' placeholder='Type to search..' className=' md:text-xl absolute right-0 md:right-2 outline-0 top-0 w-[80%] h-full px-1 rounded bg-transparent '/>
    </div>
  )
}

export default Search
