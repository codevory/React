import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'
const SearchBar = () => {
const [text,setText] = useState('')

const dispatch = useDispatch()
  return (
    <div>
      <form onSubmit={(e) => {console.log("form submitted")
        e.preventDefault()
        setText('')
         dispatch(setQuery(text))
      }} className='bg-(--colorTertiary) flex gap-5 p-4 md:py-8 lg:py-7 md:px-15 lg:px-20 '>
        <input required type='search' placeholder='search Anything' 
        value={text} onChange={(e) => setText(e.target.value)} className='w-full h-15 rounded-xl px-4 py-2 outline-none border-2 ' ></input>
        <button className='w-50 h-15 rounded-xl px-4 py-2 outline-none border-2 cursor-pointer active:scale-95 '>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
