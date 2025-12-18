import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost.jsx'
import { Outlet, Route, Routes } from "react-router-dom"
import PagenotFound from './pages/PagenotFound'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Singleblog from './pages/Singleblog'
import EditPost from './pages/Editpost.jsx'

function App() {
 
  return  <div className='bg-black text-white w-full min-h-screen overflow-hidden'>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/article/:id' element={<EditPost />} />
        <Route path='/article/:id' element={<Singleblog />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      <Outlet />
    </div>
  
}

export default App
