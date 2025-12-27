import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import CreatePost from '../src/components/PostComponents/CreatePost.jsx'
import { Outlet, Route, Routes } from "react-router-dom"
import PagenotFound from './pages/PagenotFound'
import Navbar from '../src/components/BodyComponents/Navbar.jsx'
import Singleblog from '../src/components/PostComponents/SingleBlogView.jsx'
import EditPost from '../src/components/PostComponents/Editpost.jsx'
import Footer from './components/BodyComponents/Footer.jsx'

function App() {
 
  return <div className='w-full min-h-screen overflow-hidden bg-white text-zinc-800 dark:bg-zinc-900 dark:text-white'>
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
