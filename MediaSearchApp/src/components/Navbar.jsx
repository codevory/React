import React from 'react'
import {Link  } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='bg-(--colorPrimary) text-white px-4 py-8 flex justify-between gap-4 items-center w-full h-12'>
    <h1 className='font-bold font-serif text-2xl '>minTrest</h1>
     <div>
      <Link className='mr-2 font-semibold font-serif hover:text-(--colorTertiary) hover:scale-120' to='/'>Home</Link>
      <Link className='mr-6 font-semibold font-serif' to='/collection'>myCollection</Link>
      </div>
    </div>
  )
}

export default Navbar
