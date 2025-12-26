import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import CreatePost from './components/CreatePost.jsx'
import { Outlet, Route, Routes } from "react-router-dom"
import PagenotFound from './pages/PagenotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Singleblog from './components/SingleBlogView.jsx'
import EditPost from './components/Editpost.jsx'

function App() {
 
  return <div className='w-full min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white'>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/article/:slug' element={<EditPost />} />
        <Route path='/article/:slug' element={<Singleblog />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      <Outlet />
    </div>
  
}

export default App
