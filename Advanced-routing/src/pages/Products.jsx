import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex justify-center items-center p-6 gap-20 text-xl'>
      <div className='flex justify-center items-center p-6 gap-20 text-xl'>
      <Link to='/product/men'>Men</Link>
      <Link to='/product/women'>Women</Link>
      </div>
            <Outlet />
    </div>
  )
}

export default Products
