import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import MenCollection from './pages/MenCollection.jsx'
import Women from './pages/WomenCollection.jsx'

function App() {
  return <div className='h-screen bg-black text-white font-semibold'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Products />} />
          <Route path='/product/men' element={<MenCollection />} />
          <Route path='/product/women' element={<Women />} />
      <Route path ='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
}

export default App
