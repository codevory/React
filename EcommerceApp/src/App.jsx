import { useState } from 'react'
import {Routes,Route} from 'react-router'
import './index.css'
import ItemGrid from './components/item/ItemGrid'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import ProductCard from './components/item/ProductCard'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/:slug' element={<ProductCard />} />
    </Routes>
    </>
  )
}

export default App
