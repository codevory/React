import { useState } from 'react'
import {Routes,Route} from 'react-router'
import './index.css'
import ItemGrid from './components/item/ItemGrid'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App
