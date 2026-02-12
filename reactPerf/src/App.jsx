import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchBox from './debouncing/SearchBox';

function App() {
  const [count, setCount] = useState(0)
    const [text, setText] = useState("");

  return (
   <div>
   <SearchBox />
   <Navbar text={text} setText={setText} />
   </div>
  )
}

export default App
