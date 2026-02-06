import {Routes,Route} from 'react-router'
import './index.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import ProductCard from './components/item/ProductCard'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
    </>
  )
}

export default App
