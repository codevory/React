import React from 'react'

const Search = () => {
    const data = JSON.parse(localStorage.getItem('postData'))

  return (
    <div className='w-full'>
      <input type='text' name='search' placeholder='Type to search..' className='w-[30%] h-10 px-2 py-1 rounded bg-gray-700 text-white'/>
    </div>
  )
}

export default Search
