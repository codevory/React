import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import ResultCard from './components/ResultCard'
import CollectionPage from './pages/CollectionPage'
function App() {


 return (
 <div className='bg-zinc-900 text-white '>
   <SearchBar />
   <Tabs />
 <Routes>
  <Route path='/' element={<ResultGrid />} />
  <Route path='/collection' element={<CollectionPage />} />
 </Routes>

 </div>
 )
}

export default App
