import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
  import { ToastContainer, toast } from 'react-toastify';

function App() {


 return (
 <div className=' '>
    <Navbar />
     <ToastContainer />
 <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/collection' element={<CollectionPage />} />
 </Routes>

 </div>
 )
}

export default App
