import React,{useState,useEffect} from 'react'
import {Link} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery} from '../store/searchSlice'
import Cart from './Cart'
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
      <input value={text} onChange={(e) => setText(e.target.value)} type='search' className='w-80 h-8 rounded outline-0 border '></input>
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
