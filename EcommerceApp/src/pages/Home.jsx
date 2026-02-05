import React from 'react'
import Navbar from '../components/Navbar'
import ItemGrid from '../components/item/ItemGrid'

const Home = () => {
const getData = async() => {
 let resp = await fetch('https://dummyjson.com/products/search?q=watch')
 .then((res) => res.json())
 .then((data) => console.log(data))
} 
  return (<>
  <div className='max-w-screen h-full flex justify-center gap-10 flex-wrap p-4'>

  <ItemGrid />
  </div>
  
  </>  
  )
}

export default Home
