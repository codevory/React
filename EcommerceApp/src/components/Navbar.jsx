import React,{useState,useEffect} from 'react'
import {Link} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery} from '../store/searchSlice'
import Cart from './Cart'
import { Search } from 'lucide-react'
const Navbar = () => {

    const dispatch = useDispatch()
    const [text,setText] = useState('')
  return (
    <div key={1}  className='flex items-center justify-between bg-green-500 h-15 px-2 py-1'>
      <div>img</div>

      <div className='flex gap-5 items-center'>
        <form onSubmit={(e) => {
            e.preventDefault()
            setText('')
            dispatch(setQuery(text))
        }}>
          <span className='w-85 flex gap-1  items-center border rounded p-0.5'>
      <input value={text} onChange={(e) => setText(e.target.value)} type='search' className='w-80 h-8 rounded outline-0 border-0 ' ></input>
          <button onClick={(e) => {
            e.preventDefault()
            setText('')
            dispatch(setQuery(text))
        }} className='w-7 m-0 p-0 h-auto cursor-pointer'><Search /> </button>
          </span>
       
        </form>
        <div className='flex gap-2 items-center'>
       <Link to='/'>Home</Link>
       <Link to='/shop'>Shop</Link>
       <Link to='/checkout'><div><Cart  /> </div> </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
